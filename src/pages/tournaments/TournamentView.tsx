import { useEffect, useState } from "react";
import Title from "../../components/Title.tsx";
import Menu from "../../components/menu/Menu.tsx";
import { useParams } from "react-router-dom";
import GameTable from "../../components/GameTable.tsx";
import { Tournament } from "../../types/tournament.ts";
import { Game } from "../../types/game.ts";

export default function TeamView() {
  const { id } = useParams();
  const [tournament, setTournament] = useState<Tournament>();
  const [lastGames, setLastGames] = useState<Array<Game>>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_VITE_API_ROOT + "/api/tournaments/" + id)
      .then((response) => response.json())
      .then((json) => setTournament(json.data));
  }, [id]);

  useEffect(() => {
    fetch(import.meta.env.VITE_VITE_API_ROOT + "/api/tournaments/" + id + "/games")
      .then((response) => response.json())
      .then((json) => setLastGames(json.data));
  }, [id]);

  return (
    <>
      <Menu />
      <main>
        <Title>{tournament ? tournament.name : ""}</Title>
        <Title>Derniers matchs</Title>
        <GameTable games={lastGames} />
      </main>
    </>
  );
}
