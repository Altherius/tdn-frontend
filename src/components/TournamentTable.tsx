import { Tournament } from '../types/tournament';
import TournamentTableRow from './TournamentTableRow';


export default function TournamentTable({tournaments}: {tournaments: Array<Tournament>}) {
    return <table className='tableFrame'>
    <thead className='tableHeader'>
      <tr>
        <th className='tableHeader__cell'>Nom</th>
        <th className='tableHeader__cell'>Vainqueur</th>
        <th className='tableHeader__cell'>Finaliste</th>
        <th className='tableHeader__cell'>Troisième</th>
      </tr>
    </thead>
    <tbody>
      {tournaments.map((tournament: Tournament) => 
        <TournamentTableRow key={tournament.id} tournament={tournament} />
      )}
    </tbody>
  </table>
}