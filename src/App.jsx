//! Core modules
import React, { Component } from 'react';

//! Custom Modules/ Components
import Header from './Header/Header';
import Routes from './Routes';

class App extends Component {
        render() {
                return (
                        <div className="App" style={{minWidth: '1100px', maxWidth: '1200px'}}>
                                <Header />
                                <Routes />
                        </div>
                );
        }
}

export default App;