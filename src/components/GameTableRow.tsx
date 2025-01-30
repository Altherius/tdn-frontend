import { Game } from '../types/game';

export default function GameTableRow({game}: {game: Game}) {
    return <tr className="tableRow">
        <td className="tableRow__cell">{game.name}</td>
        <td className="tableRow__cell">{game.gameScoreTotal}</td>
        <td className="tableRow__cell">Aller {game.gameScoreFirst} - Retour {game.gameScoreSecond}</td>
    </tr>;
}