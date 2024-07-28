import { useEffect, useState } from 'react';
import {Team} from '../../types/team.ts';
import Title from '../../components/Title.tsx';
import Menu from '../../components/Menu.tsx';
import { useParams } from 'react-router-dom';
import GameTable from '../../components/GameTable.tsx';
import { Game } from '../../types/game.ts';

export default function TeamView() {

    const {id} = useParams();
    const [team, setTeam] = useState<Team>({id: 0, name: '', rating: 0, region: ''});
    const [lastGames, setLastGames] = useState<Array<Game>>([]);

  
    useEffect(() => {
      fetch('http://localhost/api/teams/' + id)
      .then(((response) => response.json()))
      .then((json) => setTeam(json.data));
    }, [id]);

    useEffect(() => {
      fetch('http://localhost/api/teams/' + id + '/games')
      .then(((response) => response.json()))
      .then((json) => setLastGames(json.data));
    }, [id]);

    useEffect(() => {
      fetch('http://localhost/api/teams/' + id + '/elo-history')
      .then(((response) => response.json()))
      .then((json) => setEloHistory(json.data));
    }, [id]);
  
    return (
      <>
        <Menu />
        <Title>{team.name}</Title>
        <p>Classement : {team.rating}</p>
        <Title>Derniers matchs</Title>
        <GameTable games={lastGames} />
      </>
    )
  }