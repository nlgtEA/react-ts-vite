import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
