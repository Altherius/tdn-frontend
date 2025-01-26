import Menu from "../../components/Menu.tsx";
import {useState} from "react";

export default function TeamNew() {

    const [name, setName] = useState<string>('');
    const [region, setRegion] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    const handleSubmit = () => {
        fetch('http://localhost/api/teams', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                countryCode: country,
                region: region,
            })
        }).then(((response) => response.json()))
            .then((json) => console.log(json));
    };


    return (
        <div>
            <Menu />
            <h1>Création d'équipe</h1>

            <div>
                <label htmlFor="teamName">Nom de l'équipe</label>
                <input
                    type="text" id={"teamName"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="teamRegion">Région</label>
                <input
                    type="text"
                    id={"teamRegion"}
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="teamCountry">Pays</label>
                <input
                    type="text"
                    id={"teamCountry"}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>Créer l'équipe</button>
        </div>
    )
}