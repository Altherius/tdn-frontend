import { Team } from '../types/team';
import { Link } from 'react-router-dom';

export default function TeamTableRow({team}: {team: Team}): JSX.Element {
    return <tr>
        <td><Link to={"/teams/" + team.id}>{team.name}</Link></td>
        <td>{team.region}</td>
        <td>{team.rating}</td>
    </tr>;
}