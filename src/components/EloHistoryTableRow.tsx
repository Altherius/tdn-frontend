import {EloHistoryEntry} from "../types/elo_history.ts";
import moment from 'moment';
import 'moment/dist/locale/fr';

moment.locale('fr');

export default function EloHistoryTableRow({historyEntry}: {historyEntry: EloHistoryEntry}) {
    return <tr>
        <td>{moment(historyEntry.date).format('L LT')}</td>
        <td>{historyEntry.rating}</td>
    </tr>;
}