import { Game } from '../types/game';
import GameTableRow from './GameTableRow';


export default function GameTable({games}: {games: Array<Game>}) {
    return <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Résultat</th>
        <th>Détails</th>
      </tr>
    </thead>
    <tbody>
      {games.map((game: Game) => 
        <GameTableRow key={game.id} game={game} />
      )}
    </tbody>
  </table>
}