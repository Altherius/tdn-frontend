import { Link } from 'react-router-dom';
import { Tournament } from '../types/tournament';

export default function TournamentTableRow({tournament, id}: {tournament: Tournament, id:number}) {
    return <tr className={`tableRow ${id % 2 == 0 ? "tableRow--even" : ""}`}>
        <td className="tableRow__cell"><Link to={"/tournaments/" + tournament.id}>{tournament.name} {tournament.major ? '***' : ''}</Link></td>
        <td className="tableRow__cell"><Link to={"/teams/" + tournament.goldTeam.id}>{tournament.goldTeam.name}</Link></td>
        <td className="tableRow__cell"><Link to={"/tournaments/" + tournament.silverTeam.id}>{tournament.silverTeam.name}</Link></td>
        <td className="tableRow__cell"><Link to={"/tournaments/" + tournament.bronzeTeam.id}>{tournament.bronzeTeam.name}</Link></td>
    </tr>;
}