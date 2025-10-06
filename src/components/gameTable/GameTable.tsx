import './gameTable.css';
import {Game} from '../../types/game';
import GameTableRow from './GameTableRow';


export default function GameTable({games, team}: { games: Array<Game>, team?: number }) {
    return <table className='tableFrame'>
        <thead className='tableHeader'>
        <tr>
            <th className='tableHeader__cell'>Nom</th>
            <th className='tableHeader__cell gameTableRow__tournament'>Tournoi</th>
            <th className='tableHeader__cell gameTableHeader__result'>Résultat</th>
        </tr>
        </thead>
        <tbody>
        {games.map((game: Game) =>
            <GameTableRow key={game.id} game={game} team={team} />
        )}
        </tbody>
    </table>
}