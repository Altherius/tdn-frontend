import { Game } from '../types/game';

export default function GameCard({game}: {game: Game}) {
    return <div>
        <h3>{game.name}</h3>
        <p>{game.gameScoreTotal} (Aller {game.gameScoreFirst} - Retour {game.gameScoreSecond})</p>
    </div>;
}