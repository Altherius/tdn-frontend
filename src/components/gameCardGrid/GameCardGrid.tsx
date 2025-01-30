import { Game } from "../../types/game.ts";
import GameCard from "../gameCard/GameCard.tsx";

import './gameCardGrid.css'

export default function GameCardGrid({ games }: { games: Array<Game> }) {
  return (
    <div className="gameCardGrid">
      {games.map((game, index) => (
        <GameCard  tag={index.toString()} key={game.id} game={game} />
      ))}
    </div>
  );
}
