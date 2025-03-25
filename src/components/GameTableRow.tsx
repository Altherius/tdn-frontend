import { Game } from '../types/game';
import {Link} from "react-router-dom";

export default function GameTableRow({game}: {game: Game}) {
    return <tr className="tableRow">
        <td className="tableRow__cell">
            <Link to={"/teams/" + game.hostingTeam.id}>{game.hostingTeam.name} </Link>
            - <Link to={"/teams/" + game.receivingTeam.id}>{game.receivingTeam.name}</Link>
        </td>
        <td className="tableRow__cell">
            <Link to={"/tournaments/" + game.tournament.id}>{game.tournament.name}</Link>
        </td>
        <td className="tableRow__cell">{game.gameScoreTotal} ( Aller {game.gameScoreFirst} | Retour {game.gameScoreSecond} )</td>
    </tr>;
}