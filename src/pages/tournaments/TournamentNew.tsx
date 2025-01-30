import {useState} from "react";
import Menu from "../../components/Menu.tsx";

export default function TournamentNew() {

    const [tournamentName, setTournamentName] = useState<string>("Nouveau tournoi");
    const [tournamentStartsAt, setTournamentStartsAt] = useState<string>();
    const [tournamentMajor, setTournamentMajor] = useState<boolean>(true);
    const [tournamentBalancing, setTournamentBalancing] = useState<boolean>(false);
    const [tournamentEloMultiplier, setTournamentEloMultiplier] = useState<number>(1);

    const handleSubmit = () => {
        fetch('http://localhost/api/tournaments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: tournamentName,
                major: tournamentMajor,
                balancing: tournamentBalancing,
                eloMultiplier: tournamentEloMultiplier,
                startsAt: tournamentStartsAt
            })
        }).then(((response) => response.json()))
            .then((json) => console.log(json));
    };

    return (
        <div>

            <Menu />
            <h1>Création de tournoi</h1>

            <div>
                <label htmlFor="tournamentName">Nom du tournoi</label>
                <input type="text" id={"tournamentName"} value={tournamentName}
                       onChange={(e) => setTournamentName(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="tournamentName">Date de début</label>
                <input type="date" id={"tournamentStartsAt"} value={tournamentStartsAt}
                       onChange={(e) => setTournamentStartsAt(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="tournamentMajor">Tournoi majeur (donne des étoiles)</label>
                <input type="checkbox" id={"tournamentMajor"} defaultChecked={tournamentMajor}
                       onChange={() => setTournamentMajor(!tournamentMajor)}/>
            </div>

            <div>
                <label htmlFor="tournamentBalance">Tournoi de rééquilibrage</label>
                <input type="checkbox" id={"tournamentBalance"} defaultChecked={tournamentBalancing}
                       onChange={() => setTournamentBalancing(!tournamentBalancing)}/>
            </div>

            <div>
                <label htmlFor="tournamentEloMultiplier">Multiplicateur Elo</label>
                <input
                    type="number"
                    id={"tournamentEloMultiplier"}
                    value={tournamentEloMultiplier}
                    onChange={(e) => setTournamentEloMultiplier(parseFloat(e.target.value))}
                />
            </div>

            <button onClick={handleSubmit}>Créer le tournoi</button>
        </div>
    )
}