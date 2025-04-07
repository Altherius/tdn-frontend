import { Team } from '../../types/team';
import TeamTableRow from './TeamTableRow';


export default function TeamTable({teams, setTeams}: {teams: Array<Team>; setTeams: (teams: Array<Team>) => void}) {

    const sortByName = () => {
        setTeams([...teams].sort((a: Team, b: Team) => (a.name > b.name ? 1 : -1)));
    }
    
    const sortByRating = () => {
        setTeams([...teams].sort((a: Team, b: Team) => (b.rating - a.rating)));
    }

    return <table className='tableFrame'>
    <thead  className='tableHeader'>
      <tr>
        <th className='tableHeader__cell' onClick={sortByName}>Équipe</th>
        <th className='tableHeader__cell'>Région</th>
        <th className='tableHeader__cell'onClick={sortByRating}>Elo</th>
        <th className='tableHeader__cell'>Résultats matchs</th>
        <th className='tableHeader__cell'>Progression Elo</th>
        <th className='tableHeader__cell'>Derniers matchs</th>
      </tr>
    </thead>
    <tbody>
      {teams.map((team: Team) => 
        <TeamTableRow key={team.id} team={team} />
      )}
    </tbody>
  </table>
}