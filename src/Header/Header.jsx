import React, { Component } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

export default class Header extends Component {
        render() {
                return (
                        <header className="main_header">
                                <Logo />
                                <SearchBar />
                                <Navbar />
                        </header>
                )
        }
}
