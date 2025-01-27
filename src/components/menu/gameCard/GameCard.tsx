import { Game } from "../../../types/game";
import './gameCard.css'

export default function GameCard({ game, tag}: { game: Game ,tag: string }) {
  return (
    <div className={`gameCard gameCard-${tag}`}>
      <h3 className="gameCard__title">{game.name}</h3>
      {game.hostingTeam.countryCode} {game.gameScoreTotal} {game.receivingTeam.countryCode}
      <p className="gameCard__score">
        Aller {game.gameScoreFirst} | Retour {game.gameScoreSecond} 
      </p>
    </div>
  );
}
