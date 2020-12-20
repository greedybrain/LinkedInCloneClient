//! Core modules
import React, { Component } from 'react';

//! Custom Modules/ Components
import Header from './Header/Header';
import Routes from './Routes';

class App extends Component {
        render() {
                return (
                        <div className="App">
                                <Header />
                                <Routes />
                        </div>
                );
        }
}

export default App;