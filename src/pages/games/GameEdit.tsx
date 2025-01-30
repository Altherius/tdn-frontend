export default function GameEdit() {
    return (
        <div>
            <h1>Éditer hostingTeam - receivingTeam (tournamentName)</h1>
            <h2>Match</h2>

            <div>
                <label htmlFor="tournament">Tournoi</label>
                <select id={"tournament"}/>
            </div>

            <div>
                <label htmlFor="hostingTeam">Équipe domicile</label>
                <select id={"hostingTeam"}/>
            </div>

            <div>
                <label htmlFor="receivingTeam">Équipe visiteur</label>
                <select id={"receivingTeam"}/>
            </div>


            <h2>Match aller</h2>

            <div>
                <label htmlFor="hostingTeamScore1">Score domicile (teamName)</label>
                <input type="number" id={"hostingTeamScore1"}/>
            </div>

            <div>
                <label htmlFor="receivingTeamScore1">Score visiteur (teamName)</label>
                <input type="number" id={"receivingTeamScore1"}/>
            </div>

            <h2>Match retour</h2>

            <div>
                <label htmlFor="hostingTeamScore2">Score domicile (teamName)</label>
                <input type="number" id={"hostingTeamScore2"}/>
            </div>

            <div>
                <label htmlFor="receivingTeamScore2">Score visiteur (teamName)</label>
                <input type="number" id={"receivingTeamScore2"}/>
            </div>

            <button>Éditer le match</button>
        </div>
    )
}