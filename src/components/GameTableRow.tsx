import { Game } from '../types/game';

export default function GameTableRow({game}: {game: Game}) {
    return <tr>
        <td>{game.name}</td>
        <td>{game.gameScoreTotal}</td>
        <td>Aller {game.gameScoreFirst} - Retour {game.gameScoreSecond}</td>
    </tr>;
}