import React from 'react';
import ReactDOM from 'react-dom';
import Indecision from './components/IndecisionApp.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const Layout = () => {
    return (
        <div>
        <p>Header</p>
        <p>Footer</p>
        </div>
    );
};

const template = (
    <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
    </div>
);

ReactDOM.render(<Indecision />,document.getElementById('app'));