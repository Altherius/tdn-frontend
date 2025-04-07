import { Game } from "../../types/game";
import { Link } from "react-router-dom";

export default function GameTableRow({ game, team }: { game: Game; team: number }) {
  var isHost: boolean = false;
  team === game.hostingTeam.id ? (isHost = true) : (isHost = false);

  const matchScores = game.gameScoreTotal.match(/(\d+)\s*-\s*(\d+)/);
  var teamResult;

  if (matchScores) {
    const hostingScore = parseInt(matchScores[1], 10);
    const receiveingScore = parseInt(matchScores[2], 10);

    if (hostingScore === receiveingScore) {
      teamResult = "draw";
    } else if (isHost) {
      hostingScore > receiveingScore ? (teamResult = "win") : (teamResult = "loss");
    } else if (!isHost) {
      hostingScore < receiveingScore ? (teamResult = "win") : (teamResult = "loss");
    }

    return (
      <tr className={`tableRow gameTableRow-${teamResult}`}>
        <td className="tableRow__cell">
          <Link to={"/teams/" + game.hostingTeam.id}>{game.hostingTeam.name} </Link>-{" "}
          <Link to={"/teams/" + game.receivingTeam.id}>{game.receivingTeam.name}</Link>
        </td>
        <td className="tableRow__cell">
          <Link to={"/tournaments/" + game.tournament.id}>{game.tournament.name}</Link>
        </td>
        <td className="tableRow__cell gameTableRow__result">
        <span className="text-bold">{game.gameScoreTotal} </span>{" "}
          | <span className="text-bold">Aller</span>{" "}
          {game.gameScoreFirst} /<span className="text-bold">Retour</span>{" "}
          {game.gameScoreSecond}
        </td>
      </tr>
    );
  }
}
