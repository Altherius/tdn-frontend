import { Team } from '../types/team';

export default function TeamTableRow({team}: {team: Team}): JSX.Element {
    return <tr>
        <td>{team.name}</td>
        <td>{team.region}</td>
        <td>{team.rating}</td>
    </tr>;
}