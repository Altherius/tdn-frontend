import { useEffect, useState } from 'react';
import {Team} from './types/team';
import './App.css'

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost/api/teams')
    .then(((response) => response.json()))
    .then((json) => setTeams(json.data));
  }, []);

  const sortByName = () => {
    setTeams([...teams].sort((a: Team, b: Team) => (a.name > b.name ? 1 : -1)));
  }

  const sortByRating = () => {
    setTeams([...teams].sort((a: Team, b: Team) => (b.rating - a.rating)));
  }

  return (
    <>
      <h1>Tournoi des nations</h1>
      <table>
        <thead>
          <tr>
            <th onClick={sortByName}>Équipe</th>
            <th onClick={sortByRating}>Classement</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team: Team) => 
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.rating}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default App
