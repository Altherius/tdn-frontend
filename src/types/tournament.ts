import {Team} from "./team.ts";

export type Tournament = {
    id: number
    name: string
    major: boolean
    goldTeam: Team
    silverTeam: Team
    bronzeTeam: Team
}