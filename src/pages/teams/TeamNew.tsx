export default function TeamNew() {
    return (
        <div>
            <h1>Création d'équipe</h1>

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

            <button>Créer l'équipe</button>
        </div>
    )
}