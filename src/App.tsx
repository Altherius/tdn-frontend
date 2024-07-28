import React, { useEffect, useState } from 'react';
import Input from './components/Input.tsx';
import {Team} from './types/team';
import TeamTable from './components/TeamTable.tsx';
import Title from './components/Title.tsx';
import './App.css'

function App() {

  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState('');

  const filteredTeams = teams.filter((team: Team) => {
    if (
      search && 
      !team.name.toLowerCase().includes(search) &&
      !team.region.toLowerCase().includes(search)
    ) {
      return false;
    }

    return true;
  })

  useEffect(() => {
    fetch('http://localhost/api/teams')
    .then(((response) => response.json()))
    .then((json) => setTeams(json.data));
  }, []);

  return (
    <>
      <Title>Tournoi des nations</Title>
      <Input value={search} placeholder='Rechercher...' onChange={setSearch} />
      <TeamTable teams={filteredTeams} setTeams={setTeams} />
    </>
  )
}

export default App