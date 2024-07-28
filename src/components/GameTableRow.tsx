import { Game } from '../types/game';

export default function GameTableRow({game}: {game: Game}): JSX.Element {
    return <tr>
        <td>{game.name}</td>
        <td>{game.gameScoreTotal} (Aller {game.gameScoreFirst} - Retour {game.gameScoreSecond})</td>
    </tr>;
}