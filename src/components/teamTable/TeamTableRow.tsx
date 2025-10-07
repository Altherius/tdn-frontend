import { Team } from "../../types/team.ts";
import { Link } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import CountryFlag from "../countryFlag/CountryFlag.tsx";

export default function TeamTableRow({team }: { team: Team }) {
  return (
    <tr className="tableRow">
      <td className="tableRow__cell">
        <Link to={"/teams/" + team.id}>
          {" "}
          <CountryFlag countryCode={team.countryCode} /> {team.name}
        </Link>
      </td>
      <td className="tableRow__cell">{team.region}</td>
      <td className="tableRow__cell">{team.rating}</td>
      <td className="tableRow__cell">
        {team.gameCount} | <span className="text-win">{team.winsCount} W</span> | <span className="text-draw">{team.drawCount} D</span> |{" "}
        <span className="text-loss">{team.lossCount} L</span>
      </td>
      <td className="tableRow__cell">{team.eloProgression} Elo/match</td>
      <td className="tableRow__cell">
        {team.lastResults.slice(0,5).map((result) => (
          <span className={`result result-${result.result}`}></span>
        ))}
      </td>
    </tr>
  );
}
