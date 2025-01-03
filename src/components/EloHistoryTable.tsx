import {EloHistoryEntry} from "../types/elo_history.ts";
import EloHistoryTableRow from "./EloHistoryTableRow.tsx";


export default function EloHistoryTable({eloHistory}: { eloHistory: Array<EloHistoryEntry> }) {
    return <table>
        <thead>
        <tr>
            <th>Date</th>
            <th>Classement</th>
        </tr>
        </thead>
        <tbody>
        {eloHistory.map((historyEntry) =>
            <EloHistoryTableRow key={historyEntry.id} historyEntry={historyEntry}/>
        )}
        </tbody>
    </table>
}