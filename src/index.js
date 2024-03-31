import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import Home from './pages/Home';
import About from './pages/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routes} />);
