//! Core Modules
import React, { Component } from "react";

//! Custom Modules and Components
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "../Styles/Header.css";

export default class Header extends Component {
	render() {
		return (
			<header className='main_header'>
				<div className='header_wrapper'>
					<div className='logo_and_search_bar'>
						<Logo />
						<SearchBar />
					</div>
					<Navbar />
				</div>
			</header>
		);
	}
}
