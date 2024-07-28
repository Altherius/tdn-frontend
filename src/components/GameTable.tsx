import { Game } from '../types/game';
import GameTableRow from './GameTableRow';


export default function GameTable({games, setGames}: {games: Array<Game>; setGames: (games: Array<Game>) => void}) {
    return <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Résultat</th>
      </tr>
    </thead>
    <tbody>
      {games.map((game: Game) => 
        <GameTableRow key={game.id} game={game} />
      )}
    </tbody>
  </table>
}