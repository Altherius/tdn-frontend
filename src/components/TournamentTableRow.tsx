import { Link } from 'react-router-dom';
import { Tournament } from '../types/tournament';

export default function TournamentTableRow({tournament}: {tournament: Tournament}): JSX.Element {
    return <tr>
        <td><Link to={"/tournaments/" + tournament.id}>{tournament.name}</Link></td>
    </tr>;
}