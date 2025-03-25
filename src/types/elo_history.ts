import {Team} from "./team.ts";

export type EloHistoryEntry = {
    id: number
    rating: number
    date: string
    opposingTeam: Team
}