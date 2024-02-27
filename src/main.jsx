import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from '@/Application.jsx';
import { BrowserRouter } from 'react-router-dom';
import '@styles/general.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </React.StrictMode>
);
