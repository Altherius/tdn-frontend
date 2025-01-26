import {Team} from "../types/team.ts";



export default function TeamSelect(teams: Array<Team>) {
    return <select id={"hostingTeam"}>
        {teams.map((team) => <option value={team.id} key={team.id}>{team.name}</option>)}
    </select>
}