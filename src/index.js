import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const getCurrentDate = () => new Date().toDateString()

// const greeting = React.createElement('h1', {}, 'Hello world!')
const greeting = (
    <h1>Hellow Worlds Current date: {getCurrentDate()}</h1>
)

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
