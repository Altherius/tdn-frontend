import Menu from "../../components/menu/Menu.tsx";
import {useState} from "react";
import Title from "../../components/Title.tsx";

export default function TeamNew() {

    const [name, setName] = useState<string>('');
    const [region, setRegion] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    const handleSubmit = () => {
        fetch(import.meta.env.VITE_API_ROOT + '/api/teams', {
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
        <>
            <Menu />
            <main>
                <Title>Création d'équipe</Title>

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
                    <select value={region} onChange={(e) => setRegion(e.target.value)}>
                        <option value="africa">Afrique</option>
                        <option value="north_america">Amérique du Nord</option>
                        <option value="south_america">Amérique du Sud</option>
                        <option value="asia">Asie</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Océanie</option>
                    </select>
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
            </main>
        </>
    )
}