import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import the App file
import App from './App';



const element = (
    <StrictMode>
        <App />
    </StrictMode>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);