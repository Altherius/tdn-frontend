import { Game } from '../types/game';
import GameCard from "./GameCard.tsx";

export default function GameCardGrid({games}: {games: Array<Game>}) {
    return <div>
        {games.map((game) => <GameCard key={game.id} game={game} />)}
    </div>;
}