import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TeamIndex from './pages/teams/TeamIndex';
import TournamentIndex from './pages/tournaments/TournamentIndex';
import TournamentView from './pages/tournaments/TournamentView';
import TeamView from './pages/teams/TeamView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TeamIndex />
  },
  {
    path: '/teams/:id',
    element: <TeamView />
  },
  {
    path: '/tournaments',
    element: <TournamentIndex />
  },
  {
    path: '/tournaments/:id',
    element: <TournamentView />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
