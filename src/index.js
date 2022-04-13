import React from 'react';
import {createRoot} from 'react-dom/client';
import MainApp from './MainApp';
import "./main.css";

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);
root.render(<MainApp/>);
