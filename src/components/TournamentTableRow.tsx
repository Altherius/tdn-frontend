import { Link } from 'react-router-dom';
import { Tournament } from '../types/tournament';
import CountryFlag from './countryFlag/CountryFlag';

export default function TournamentTableRow({tournament}: {tournament: Tournament}) {
    return <tr className="tableRow">
        <td className="tableRow__cell"><Link to={"/tournaments/" + tournament.id}>{tournament.name} {tournament.major ? '***' : ''}</Link></td>
        <td className="tableRow__cell">
            {tournament.goldTeam && <CountryFlag countryCode={tournament.goldTeam.countryCode}/>}
            {tournament.goldTeam && <Link to={"/teams/" + tournament.goldTeam.id}>{tournament.goldTeam.name}</Link>}
        </td>
        <td className="tableRow__cell">
            {tournament.silverTeam && <CountryFlag countryCode={tournament.silverTeam.countryCode} />}
            {tournament.silverTeam && <Link to={"/tournaments/" + tournament.silverTeam.id}>{tournament.silverTeam.name}</Link>}</td>
        <td className="tableRow__cell">
            {tournament.bronzeTeam && <CountryFlag countryCode={tournament.bronzeTeam.countryCode} />}
            {tournament.bronzeTeam && <Link to={"/tournaments/" + tournament.bronzeTeam.id}>{tournament.bronzeTeam.name}</Link>}
        </td>
    </tr>;
}