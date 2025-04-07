import './tournamentTable.css'
import { Tournament } from '../../types/tournament';
import TournamentTableRow from './TournamentTableRow';


export default function TournamentTable({tournaments}: {tournaments: Array<Tournament>}) {
    return <table className='tableFrame'>
    <thead className='tableHeader'>
      <tr>
        <th className='tableHeader__cell tournamentName'>Nom</th>
        <th className='tableHeader__cell tournamentFirst'>Vainqueur</th>
        <th className='tableHeader__cell tournamentSecond'>Finaliste</th>
        <th className='tableHeader__cell tournamentThird'>Troisième</th>
      </tr>
    </thead>
    <tbody>
      {tournaments.map((tournament: Tournament) => 
        <TournamentTableRow key={tournament.id} tournament={tournament} />
      )}
    </tbody>
  </table>
}