import {useEffect, useState} from "react";
import {Team} from "../../types/team.ts";
import {Tournament} from "../../types/tournament.ts";

export default function GameNew() {

    const [tournaments, setTournaments] = useState<Array<Tournament>>([]);
    const [teams, setTeams] = useState<Array<Team>>([]);

    const [tournament, setTournament] = useState<Tournament>();
    const [hostingTeam, setHostingTeam] = useState<Team>();
    const [receivingTeam, setReceivingTeam] = useState<Team>();

    const [hostingTeamScore1, setHostingTeamScore1] = useState<number>(0);
    const [hostingTeamScore2, setHostingTeamScore2] = useState<number>(0);
    const [receivingTeamScore1, setReceivingTeamScore1] = useState<number>(0);
    const [receivingTeamScore2, setReceivingTeamScore2] = useState<number>(0);

    useEffect(() => {
        fetch('http://localhost/api/tournaments')
            .then(((response) => response.json()))
            .then((json) => setTournaments(json.data));
    }, []);

    useEffect(() => {
        fetch('http://localhost/api/teams')
            .then(((response) => response.json()))
            .then((json) => {
                setTeams(json.data)
            });
    }, []);

    const handleSubmit = () => {
        fetch('http://localhost/api/games', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hostingTeamId: hostingTeam ? hostingTeam.id : 0,
                receivingTeamId: receivingTeam ? receivingTeam.id : 0,
                tournamentId: tournament ? tournament.id : 0,
                hostScore1: hostingTeamScore1,
                guestScore1: receivingTeamScore1,
                hostScore2: hostingTeamScore2,
                guestScore2: receivingTeamScore2
            })
        }).then(((response) => response.json()))
        .then((json) => console.log(json));
    };

    return (
        <div>
            <h1>Créer un match</h1>
            <h2>Match</h2>

            <div>
                <label htmlFor="tournament">Tournoi</label>
                <select id={"tournament"} onChange={(e) => setTournament(tournaments.find(tournament => tournament.id === parseInt(e.target.value)))}>
                 {tournaments.map((tournament) => <option value={tournament.id} key={tournament.id}>{tournament.name}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="hostingTeam">Équipe domicile</label>
                <select id={"hostingTeam"} onChange={(e) => setHostingTeam(teams.find(team => team.id === parseInt(e.target.value)))}>
                    {teams.map((team) => <option value={team.id} key={team.id}>{team.name}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="receivingTeam">Équipe visiteur</label>
                <select id={"receivingTeam"} onChange={(e) => setReceivingTeam(teams.find(team => team.id === parseInt(e.target.value)))}>
                    {teams.map((team) => <option value={team.id} key={team.id}>{team.name}</option>)}
                </select>
            </div>


            <h2>Match aller</h2>
    ²
            <div>
                <label htmlFor="hostingTeamScore1">Score domicile ({hostingTeam ? hostingTeam.name : 'Aucune'})</label>
                <input type="number" id={"hostingTeamScore1"} value={hostingTeamScore1} onChange={(e) => setHostingTeamScore1(parseInt(e.target.value))}/>
            </div>

            <div>
                <label htmlFor="receivingTeamScore1">Score visiteur ({receivingTeam ? receivingTeam.name : 'Aucune'})</label>
                <input type="number" id={"receivingTeamScore1"} value={receivingTeamScore1} onChange={(e) => setReceivingTeamScore1(parseInt(e.target.value))}/>
            </div>

            <h2>Match retour</h2>

            <div>
                <label htmlFor="hostingTeamScore2">Score domicile ({hostingTeam ? hostingTeam.name : 'Aucune'})</label>
                <input type="number" id={"hostingTeamScore2"} value={hostingTeamScore2} onChange={(e) => setHostingTeamScore2(parseInt(e.target.value))}/>
            </div>

            <div>
                <label htmlFor="receivingTeamScore2">Score visiteur ({receivingTeam ? receivingTeam.name : 'Aucune'})</label>
                <input type="number" id={"receivingTeamScore2"} value={receivingTeamScore2} onChange={(e) => setReceivingTeamScore2(parseInt(e.target.value))}/>
            </div>

            <button onClick={handleSubmit}>Créer le match</button>

        </div>
    )
}