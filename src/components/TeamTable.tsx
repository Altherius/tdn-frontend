import { Team } from '../types/team';
import TeamTableRow from './TeamTableRow';


export default function TeamTable({teams, setTeams}: {teams: Array<Team>; setTeams: (teams: Array<Team>) => void}) {

    const sortByName = () => {
        setTeams([...teams].sort((a: Team, b: Team) => (a.name > b.name ? 1 : -1)));
    }
    
    const sortByRating = () => {
        setTeams([...teams].sort((a: Team, b: Team) => (b.rating - a.rating)));
    }

    return <table>
    <thead>
      <tr>
        <th onClick={sortByName}>Équipe</th>
        <th>Région</th>
        <th onClick={sortByRating}>Classement</th>
      </tr>
    </thead>
    <tbody>
      {teams.map((team: Team) => 
        <TeamTableRow key={team.id} team={team} />
      )}
    </tbody>
  </table>
}