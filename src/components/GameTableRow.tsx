import { Game } from '../types/game';

export default function GameTableRow({game, id}: {game: Game, id:number}) {
    return <tr className={`tableRow ${id % 2 == 0 ? "tableRow--even" : " "}`}>
        <td className="tableRow__cell">{game.name}</td>
        <td className="tableRow__cell">{game.gameScoreTotal}</td>
        <td className="tableRow__cell">Aller {game.gameScoreFirst} - Retour {game.gameScoreSecond}</td>
    </tr>;
}