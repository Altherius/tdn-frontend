import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TeamIndex from './pages/teams/TeamIndex';
import TeamEdit from './pages/teams/TeamEdit';
import TournamentIndex from './pages/tournaments/TournamentIndex';
import TournamentView from './pages/tournaments/TournamentView';
import TeamView from './pages/teams/TeamView';
import TeamNew from "./pages/teams/TeamNew.tsx";
import TournamentEdit from "./pages/tournaments/TournamentEdit.tsx";
import TournamentNew from "./pages/tournaments/TournamentNew.tsx";
import GameEdit from "./pages/games/GameEdit.tsx";
import GameNew from "./pages/games/GameNew.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <TeamIndex />
  },
  {
    path: '/games/:id/edit',
    element: <GameEdit />
  },
  {
    path: '/games/new',
    element: <GameNew />
  },
  {
    path: '/teams/:id',
    element: <TeamView />
  },
  {
    path: '/teams/:id/edit',
    element: <TeamEdit />
  },
  {
    path: '/teams/new',
    element: <TeamNew />
  },
  {
    path: '/tournaments',
    element: <TournamentIndex />
  },
  {
    path: '/tournaments/:id',
    element: <TournamentView />
  },
  {
    path: '/tournaments/:id/edit',
    element: <TournamentEdit />
  },
  {
    path: '/tournaments/new',
    element: <TournamentNew />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
