import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import AgentSettings from '../pages/AgentSettings';
import Products from '../pages/Products';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';
import Widget from '../pages/Widget';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/products', element: <Products /> },
      { path: '/agent-settings', element: <AgentSettings /> },
      { path: '/analytics', element: <Analytics /> },
      { path: '/settings', element: <Settings /> },
      { path: '/widget', element: <Widget /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />; 