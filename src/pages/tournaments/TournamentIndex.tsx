import { useEffect, useState } from 'react';
import Input from '../../components/Input.tsx';
import {Tournament} from '../../types/tournament.ts';
import Title from '../../components/Title.tsx';
import TournamentTable from '../../components/TournamentTable.tsx';
import Menu from '../../components/Menu.tsx';

export default function TournamentIndex() {

    const [tournaments, setTournaments] = useState<Array<Tournament>>([]);
    const [search, setSearch] = useState<string>('');
  
    const filteredTournaments = tournaments.filter((tournament: Tournament) => {
      if (
        search && 
        !tournament.name.toLowerCase().includes(search)
      ) {
        return false;
      }
  
      return true;
    })
  
    useEffect(() => {
      fetch('http://localhost/api/tournaments')
      .then(((response) => response.json()))
      .then((json) => setTournaments(json.data));
    }, []);
  
    return (
      <>
        <Menu />
        <Title>Liste des tournois</Title>
        <Input value={search} placeholder='Rechercher...' onChange={setSearch} />
        <TournamentTable tournaments={filteredTournaments} />
      </>
    )
  }