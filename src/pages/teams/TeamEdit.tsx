import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Team} from "../../types/team.ts";
import Menu from "../../components/menu/Menu.tsx";


export default function TeamEdit() {

    const [team, setTeam] = useState<Team>();
    const [teamName, setTeamName] = useState<string>();
    const [teamRegion, setTeamRegion] = useState<string>();
    const [teamCountry, setTeamCountry] = useState<string>();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        fetch(import.meta.env.VITE_API_ROOT + "/api/teams/" + id)
            .then((response) => response.json())
            .then((json) => {
                setTeam(json.data);
                setTeamName(json.data.name);
                setTeamRegion(json.data.region);
                setTeamCountry(json.data.countryCode);
            });
    }, [id]);

    const handleSubmit = () => {
        fetch(import.meta.env.VITE_API_ROOT + '/api/teams/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: teamName,
                countryCode: teamCountry,
                region: teamRegion,
            })
        }).then(((response) => response.json()))
            .then((json) => console.log(json));
    };


    return (
        <div>
            <Menu />

            <h1>Éditer {team ? team.name : ''}</h1>

            <div>
                <label htmlFor="teamName">Nom de l'équipe</label>
                <input
                    type="text" id={"teamName"}
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="teamRegion">Région</label>
                <select onChange={(e) => setTeamRegion(e.target.value)}>
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
                <input type="text"
                       id={"teamCountry"}
                       value={teamCountry}
                       onChange={(e) => setTeamCountry(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>Éditer l'équipe</button>
        </div>
    )
}