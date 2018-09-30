import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Intro = (props) => {
    return (
        <p className="App-intro">
            Our first functional component
        </p>
    )
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    {/* <h1 className="App-title">Welcome to React</h1> */}
                    <h1 className="App-title">TV Series List</h1>
                </header>
                <Intro />
                {/*  */}
            </div>
        );
    }
}

export default App;
