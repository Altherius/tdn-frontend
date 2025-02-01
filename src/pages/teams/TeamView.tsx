import {useEffect, useState} from "react";
import {Team} from "../../types/team.ts";
import Title from "../../components/Title.tsx";
import Menu from "../../components/menu/Menu.tsx";
import {useParams} from "react-router-dom";
import GameTable from "../../components/GameTable.tsx";
import {Game} from "../../types/game.ts";
import {EloHistoryEntry} from "../../types/elo_history.ts";
import {Line, Pie} from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title as ChartTitle,
    Tooltip,
    Legend,
} from 'chart.js';
import getFlagEmoji from "../../functions/getFlagEmoji.ts";


export default function TeamView() {
    const {id} = useParams();
    const [team, setTeam] = useState<Team>();
    const [lastGames, setLastGames] = useState<Array<Game>>([]);
    const [eloHistory, setEloHistory] = useState<Array<EloHistoryEntry>>([]);


    ChartJS.register(
        ArcElement,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        ChartTitle,
        Tooltip,
        Legend
    );


    const gameData = {
        labels: ['Défaites', 'Nuls', 'Victoires'],
        datasets: [
            {
                label: 'Nombre de matchs ',
                data: [team?.winsCount, team?.drawCount, team?.lossCount],
                backgroundColor: [
                    'rgba(167, 204, 121, 0.2)',
                    'rgba(232, 217, 86, 0.2)',
                    'rgba(206, 106, 106, 0.2)',
                ],
                borderColor: [
                    'rgba(167, 204, 121, 1)',
                    'rgba(232, 217, 86, 1)',
                    'rgba(206, 106, 106, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const eloData = {
        labels: eloHistory.map((entry) => getFlagEmoji(entry.opposingTeam.countryCode)),
        datasets: [{
            label: 'Elo',
            data: eloHistory.map((entry) => entry.rating),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        ],
    }

    const eloOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            labels: {
                font: {
                    size: 64
                }
            }
        },
    };

    useEffect(() => {
        fetch("http://localhost/api/teams/" + id)
            .then((response) => response.json())
            .then((json) => setTeam(json.data));
    }, [id]);

    useEffect(() => {
        fetch("http://localhost/api/teams/" + id + "/games")
            .then((response) => response.json())
            .then((json) => setLastGames(json.data));
    }, [id]);

    useEffect(() => {
        fetch("http://localhost/api/teams/" + id + "/elo-history")
            .then((response) => response.json())
            .then((json) => setEloHistory(json.data));
    }, [id]);

    return (
        <>
            <Menu/>
            <main>
                <Title>{team ? team.name : ""}</Title>
                <p>Classement : {team ? team.rating : 0}</p>
                <Title>Derniers matchs</Title>
                <GameTable games={lastGames}/>
                <Title>Historique du classement</Title>

                <Pie data={gameData}/>
                <Line data={eloData} options={eloOptions}/>
            </main>
        </>
    );
}
