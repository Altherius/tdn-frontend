import { Team } from "../types/team";
import { Link } from "react-router-dom";
import { GameResult } from "../types/last_result.ts";

export default function TeamTableRow({ team, id }: { team: Team; id: number }) {
  return (
    <tr className={`tableRow ${id % 2 == 0 ? "tableRow--even" : ""}`}>
      <td className="tableRow__cell">
        <Link to={"/teams/" + team.id}>{team.name}</Link>
      </td>
      <td className="tableRow__cell">{team.region}</td>
      <td className="tableRow__cell">{team.rating}</td>
      <td className="tableRow__cell">
        {team.gameCount} | <span className="text-win">{team.winsCount} W</span> | <span className="text-draw">{team.drawCount} D</span> |{" "}
        <span className="text-loss">{team.lossCount} L</span>
      </td>
      <td className="tableRow__cell">{team.eloProgression} Elo/match</td>
      <td className="tableRow__cell">
        {team.lastResults.map((result) => (result.result == GameResult.Win ? "W" : result.result == GameResult.Draw ? "D" : "L"))}
      </td>
    </tr>
  );
}
