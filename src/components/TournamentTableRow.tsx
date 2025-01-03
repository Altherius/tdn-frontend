import { Link } from 'react-router-dom';
import { Tournament } from '../types/tournament';

export default function TournamentTableRow({tournament}: {tournament: Tournament}) {
    return <tr>
        <td><Link to={"/tournaments/" + tournament.id}>{tournament.name} {tournament.major ? '***' : ''}</Link></td>
        <td><Link to={"/teams/" + tournament.goldTeam.id}>{tournament.goldTeam.name}</Link></td>
        <td><Link to={"/tournaments/" + tournament.silverTeam.id}>{tournament.silverTeam.name}</Link></td>
        <td><Link to={"/tournaments/" + tournament.bronzeTeam.id}>{tournament.bronzeTeam.name}</Link></td>
    </tr>;
}