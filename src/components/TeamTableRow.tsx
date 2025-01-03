import { Team } from '../types/team';
import { Link } from 'react-router-dom';

export default function TeamTableRow({team}: {team: Team}) {
    return <tr>
        <td><Link to={"/teams/" + team.id}>{team.name}</Link></td>
        <td>{team.region}</td>
        <td>{team.rating}</td>
        <td>{team.gameCount} ({team.winsCount} | {team.drawCount} | {team.lossCount})</td>
        <td>{team.eloProgression} Elo/match</td>
        <td>
            {team.lastResults.map((result) => result.result == 'win' ? 'W' : result.result == 'draw' ? 'D' : 'L')}
        </td>
    </tr>;
}