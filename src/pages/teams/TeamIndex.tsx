import { useEffect, useState } from "react";
import Input from "../../components/Input.tsx";
import { Team } from "../../types/team.ts";
import TeamTable from "../../components/teamTable/TeamTable.tsx";
import Title from "../../components/Title.tsx";
import Menu from "../../components/menu/Menu.tsx";
import { Game } from "../../types/game.ts";
import GameCardGrid from "../../components/gameCardGrid/GameCardGrid.tsx";

export default function TeamIndex() {
  const [teams, setTeams] = useState<Array<Team>>([]);
  const [games, setGames] = useState<Array<Game>>([]);
  const [search, setSearch] = useState<string>("");

  const filteredTeams = teams.filter((team: Team) => {
    return !(search && !team.name.toLowerCase().includes(search) && !team.region.toLowerCase().includes(search));
  });

  useEffect(() => {
    fetch(import.meta.env.VITE_API_ROOT + "/api/teams?sort[0]=rating:desc")
      .then((response) => response.json())
      .then((json) => setTeams(json.data));
  }, []);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_ROOT + "/api/games/recent")
      .then((response) => response.json())
      .then((json) => setGames(json.data));
  }, []);

  return (
    <>
      <Menu />
      <main>
        <Title>Derniers matchs</Title>
        <GameCardGrid games={games} />
        <Title>Classement des pays</Title>
        <Input value={search} placeholder="Rechercher..." onChange={setSearch} />
        <TeamTable teams={filteredTeams} setTeams={setTeams} />
      </main>
    </>
  );
}
