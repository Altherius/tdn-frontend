import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Tournament} from "../../types/tournament.ts";

export default function TournamentEdit() {

    const [tournament, setTournament] = useState<Tournament>();
    const [tournamentName, setTournamentName] = useState<string>('');
    const [tournamentMajor, setTournamentMajor] = useState<boolean>(false);
    const [tournamentBalancing, setTournamentBalancing] = useState<boolean>(false);
    const [tournamentEloMultiplier, setTournamentEloMultiplier] = useState<number>(1);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch("http://localhost/api/tournaments/" + id)
            .then((response) => response.json())
            .then((json) => {
                setTournament(json.data);
                setTournamentName(json.data.name);
                setTournamentMajor(json.data.major);
                setTournamentBalancing(json.data.balancing);
                setTournamentEloMultiplier(json.data.eloMultiplier);
            });
    }, [id]);

    const handleSubmit = () => {
        fetch('http://localhost/api/tournaments/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: tournamentName,
                major: tournamentMajor,
                balancing: tournamentBalancing,
                eloMultiplier: tournamentEloMultiplier
            })
        }).then(((response) => response.json()))
            .then((json) => console.log(json));
    };

    return (
        <div>
            <h1>Éditer {tournament ? tournament.name : ''}</h1>

            <div>
                <label htmlFor="tournamentName">Nom du tournoi</label>
                <input type="text"
                       id={"tournamentName"}
                       value={tournamentName}
                       onChange={(e) => setTournamentName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="tournamentMajor">Tournoi majeur (donne des étoiles)</label>
                <input type="checkbox"
                       id={"tournamentMajor"}
                       checked={tournamentMajor}
                       onChange={() => setTournamentMajor(!tournamentMajor)}
                />
            </div>

            <div>
                <label htmlFor="tournamentBalance">Tournoi de rééquilibrage</label>
                <input type="checkbox"
                       id={"tournamentBalance"}
                       checked={tournamentBalancing}
                       onChange={() => setTournamentBalancing(!tournamentBalancing)}
                />
            </div>

            <div>
                <label htmlFor="tournamentEloMultiplier">Multiplicateur Elo</label>
                <input type="number" id={"tournamentEloMultiplier"} value={tournamentEloMultiplier}
                onChange={(e) => setTournamentEloMultiplier(parseFloat(e.target.value))}/>
            </div>

            <button onClick={handleSubmit}>Éditer le tournoi</button>
        </div>
    )
}