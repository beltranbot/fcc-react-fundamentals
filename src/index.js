import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const greeting = React.createElement('h1', {}, 'Hello world!')

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();
