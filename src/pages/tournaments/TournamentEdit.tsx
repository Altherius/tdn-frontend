export default function TournamentEdit() {
    return (
        <div>
            <h1>Éditer tournamentName</h1>

            <div>
                <label htmlFor="tournamentName">Nom du tournoi</label>
                <input type="text" id={"tournamentName"}/>
            </div>

            <div>
                <label htmlFor="tournamentMajor">Tournoi majeur (donne des étoiles)</label>
                <input type="checkbox" id={"tournamentMajor"}/>
            </div>

            <div>
                <label htmlFor="tournamentBalance">Tournoi de rééquilibrage</label>
                <input type="checkbox" id={"tournamentBalance"}/>
            </div>

            <div>
                <label htmlFor="tournamentEloMultiplier">Multiplicateur Elo</label>
                <input type="number" id={"tournamentEloMultiplier"}/>
            </div>

            <button>Éditer le tournoi</button>
        </div>
    )
}