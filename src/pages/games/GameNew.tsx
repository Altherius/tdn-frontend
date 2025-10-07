import {useEffect, useState} from "react";
import {Team} from "../../types/team.ts";
import {Tournament} from "../../types/tournament.ts";
import Menu from "../../components/menu/Menu.tsx";
import Title from "../../components/Title.tsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import Select from "react-select";

export default function GameNew() {

    const [searchParams] = useSearchParams();
    const [tournaments, setTournaments] = useState<Array<Tournament>>([]);
    const [teams, setTeams] = useState<Array<Team>>([]);

    const [tournament, setTournament] = useState<Tournament>();
    const [hostingTeam, setHostingTeam] = useState<Team>();
    const [receivingTeam, setReceivingTeam] = useState<Team>();

    const [hostingTeamScore1, setHostingTeamScore1] = useState<number>(0);
    const [hostingTeamScore2, setHostingTeamScore2] = useState<number>(0);
    const [receivingTeamScore1, setReceivingTeamScore1] = useState<number>(0);
    const [receivingTeamScore2, setReceivingTeamScore2] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(import.meta.env.VITE_API_ROOT + '/api/tournaments')
            .then(((response) => response.json()))
            .then((json) => {
                setTournaments(json.data)
                if (searchParams.get('tournament')) {
                    setTournament(tournaments.find(tournament => tournament.id === parseInt(searchParams.get('tournament') ?? '0')))
                    console.log(tournament)
                }
            });
    }, []);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_ROOT + '/api/teams')
            .then(((response) => response.json()))
            .then((json) => {
                setTeams(json.data)
            });
    }, []);

    const handleSubmit = () => {
        fetch(import.meta.env.VITE_API_ROOT + '/api/games', {
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
        .then(
            () => {
                setHostingTeam(undefined)
                setReceivingTeam(undefined)

                setHostingTeamScore1(0)
                setHostingTeamScore2(0)
                setReceivingTeamScore1(0)
                setReceivingTeamScore2(0)
            }
        );
    };

    const handleSubmitAndRedirect = () => {
        fetch(import.meta.env.VITE_API_ROOT + '/api/games', {
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
            .then(
                () => navigate("/tournaments/" + (tournament ? tournament.id : 0))
            );
    };

    return (
        <>
            <Menu />
            <main>
                <Title>Créer un match</Title>
                <h2>Match</h2>

                <div>
                    <label htmlFor="tournament">Tournoi</label>
                    <select id={"tournament"} onChange={(e) => setTournament(tournaments.find(tournament => tournament.id === parseInt(e.target.value)))}>
                        <option value="" selected={tournament === undefined}>Choisissez un tournoi</option>
                        {tournaments.map((optionTournament) =>
                            <option value={optionTournament.id} key={optionTournament.id} selected={(tournament ? tournament.id : 0) === optionTournament.id}>{optionTournament.name}</option>
                        )}
                    </select>
                </div>

                <div>
                    <label htmlFor="hostingTeam">Équipe domicile</label>
                    <select id={"hostingTeam"} onChange={(e) => setHostingTeam(teams.find(team => team.id === parseInt(e.target.value)))}>
                        <option value="" selected={hostingTeam === null}>Choisissez une équipe</option>
                        {teams.map((team) => <option value={team.id} key={team.id}>{team.name}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="receivingTeam">Équipe visiteur</label>
                    <select id={"receivingTeam"} onChange={(e) => setReceivingTeam(teams.find(team => team.id === parseInt(e.target.value)))}>
                        <option value="" selected={hostingTeam === null}>Choisissez une équipe</option>
                        {teams.map((team) => <option value={team.id} key={team.id}>{team.name}</option>)}
                    </select>
                </div>


                <h2>Match aller</h2>
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

                <div style={{marginBottom: '1rem'}}>
                    <button onClick={handleSubmitAndRedirect}>Créer le match et revenir à la liste</button>
                    <button onClick={handleSubmit}>Créer le match et en saisir un nouveau</button>
                </div>
            </main>
        </>
    )
}