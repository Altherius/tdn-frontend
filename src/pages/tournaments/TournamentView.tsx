import { useEffect, useState } from 'react';
import Title from '../../components/Title.tsx';
import Menu from '../../components/Menu.tsx';
import { useParams } from 'react-router-dom';
import GameTable from '../../components/GameTable.tsx';

export default function TeamView() {

    const {id} = useParams();
    const [tournament, setTournament] = useState([]);
    const [lastGames, setLastGames] = useState([]);

  
    useEffect(() => {
      fetch('http://localhost/api/tournaments/' + id)
      .then(((response) => response.json()))
      .then((json) => setTournament(json.data));
    }, [id]);

    useEffect(() => {
      fetch('http://localhost/api/tournaments/' + id + '/games')
      .then(((response) => response.json()))
      .then((json) => setLastGames(json.data));
    }, [id]);
  
    return (
      <>
        <Menu />
        <Title>{tournament.name}</Title>
        <Title>Derniers matchs</Title>
        <GameTable games={lastGames} setGames={setLastGames} />
      </>
    )
  }