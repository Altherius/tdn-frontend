import { Game } from "../../types/game";
import CountryFlag from "../countryFlag/CountryFlag";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./gameCard.css";

export default function GameCard({ game, tag }: { game: Game; tag: string }) {
  return (
    <div className={`gameCard gameCard-${tag}`}>
      <h3 className="gameCard__title">{game.name}</h3>
      <div className="gameCard__result">
        <CountryFlag countryCode={game.hostingTeam.countryCode} />
        {game.gameScoreTotal} <CountryFlag countryCode={game.receivingTeam.countryCode} />
      </div>
      <p className="gameCard__score">
        Aller {game.gameScoreFirst} | Retour {game.gameScoreSecond}
      </p>
    </div>
  );
}
