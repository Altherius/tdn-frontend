import {Game} from '../../types/game';
import GameTableRow from './GameTableRow';


export default function GameTable({games}: { games: Array<Game> }) {
    return <table className='tableFrame'>
        <thead className='tableHeader'>
        <tr>
            <th className='tableHeader__cell'>Nom</th>
            <th className='tableHeader__cell'>Tournoi</th>
            <th className='tableHeader__cell'>Résultat</th>
        </tr>
        </thead>
        <tbody>
        {games.map((game: Game) =>
            <GameTableRow key={game.id} game={game} />
        )}
        </tbody>
    </table>
}