import {Team} from "./team.ts";
import {Tournament} from "./tournament.ts";

export type Game = {
    id: number;
    name: string;
    gameScoreTotal: string,
    gameScoreFirst: string,
    gameScoreSecond: string,
    hostingTeam: Team,
    receivingTeam: Team,
    tournament: Tournament
}