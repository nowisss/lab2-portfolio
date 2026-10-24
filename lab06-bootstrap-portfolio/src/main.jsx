
import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import App from './App.jsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('В index.html отсутствует элемент #root');
}

createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
