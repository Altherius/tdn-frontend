import { Tournament } from '../types/tournament';
import TournamentTableRow from './TournamentTableRow';


export default function TournamentTable({tournaments}: {tournaments: Array<Tournament>}) {
    return <table>
    <thead>
      <tr>
        <th>Nom</th>
      </tr>
    </thead>
    <tbody>
      {tournaments.map((tournament: Tournament) => 
        <TournamentTableRow key={tournament.id} tournament={tournament} />
      )}
    </tbody>
  </table>
}