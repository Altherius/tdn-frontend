export default function TeamEdit() {
    return (
        <div>
            <h1>Éditer teamName</h1>

            <div>
                <label htmlFor="teamName">Nom de l'équipe</label>
                <input type="text" id={"teamName"}/>
            </div>

            <div>
                <label htmlFor="teamRegion">Région</label>
                <input type="text" id={"teamRegion"}/>
            </div>

            <div>
                <label htmlFor="teamCountry">Pays</label>
                <input type="text" id={"teamCountry"}/>
            </div>

            <button>Éditer l'équipe</button>
        </div>
    )
}