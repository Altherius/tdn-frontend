import { Game } from "../../../types/game";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./gameCard.css";

export default function GameCard({ game, tag }: { game: Game; tag: string }) {
  return (
    <div className={`gameCard gameCard-${tag}`}>
      <h3 className="gameCard__title">{game.name}</h3>
      <div className="gameCard__result">
        <span className={`fi fi-${game.hostingTeam.countryCode.toLowerCase()}`}></span>
        {game.gameScoreTotal} <span className={`fi fi-${game.receivingTeam.countryCode.toLowerCase()}`}></span>
      </div>
      <p className="gameCard__score">
        Aller {game.gameScoreFirst} | Retour {game.gameScoreSecond}
      </p>
    </div>
  );
}
