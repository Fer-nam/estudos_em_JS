//modo antigo

/*
import ReactDOM from 'react-dom';

const el = document.getElementById('root');
ReactDOM.render('olá React!',el);
*/

//novo modo

import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App'


//usando JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);