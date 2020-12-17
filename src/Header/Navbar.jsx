//! Core Modules
import React, { Component } from 'react'

//! Custom Modules / Components
import Icon from '../Common/Icon'
import '../Styles/Navbar.css'
class Navbar extends Component {
        state = {
                homeClicked: true,
                networkClicked: false,
                jobsClicked: false,
                messagesClicked: false,
                notificationsClicked: false,
        }

        networkTabStyles = {
                transform: "rotateY(180deg)",
        }

        notificationsTabStyles = {
                transform: 'rotate(15deg)'
        }

        handleNavItemClick = (bool1, bool2, bool3, bool4, bool5) => {
                this.setState({
                        homeClicked: bool1,
                        networkClicked: bool2,
                        jobsClicked: bool3,
                        messagesClicked: bool4,
                        notificationsClicked: bool5
                })
        }

        handleHomeClick = () => this.handleNavItemClick(true, false, false, false, false)
        handleNetworkClick = () => this.handleNavItemClick(false, true, false, false, false)
        handleJobsClick = () => this.handleNavItemClick(false, false, true, false, false)
        handleMessagesClick = () => this.handleNavItemClick(false, false, false, true, false)
        handleNotificationsClick = () => this.handleNavItemClick(false, false, false, false, true)

        render() {
                const { homeClicked, networkClicked, jobsClicked, messagesClicked, notificationsClicked } = this.state
                return (
                        <nav className="main_nav">
                                <ul>
                                        <li className="nav_item home_icon">
                                                {
                                                        homeClicked 
                                                        ? <Icon name="fas fa-house-user" navItemClicked={this.handleHomeClick} />
                                                        : <Icon name="fas fa-home" navItemClicked={this.handleHomeClick} />
                                                }
                                        </li>
                                        <li className="nav_item network_icon">
                                                {
                                                        networkClicked
                                                        ? <Icon name="fas fa-user-friends" navItemClicked={this.handleNetworkClick} theseStyles={this.networkTabStyles} />
                                                        : <Icon name="fas fa-user-friends" navItemClicked={this.handleNetworkClick} />
                                                }
                                        </li>
                                        <li className="nav_item jobs_icon">
                                                {
                                                        jobsClicked
                                                        ? <Icon name="fas fa-business-time" navItemClicked={this.handleJobsClick} />
                                                        : <Icon name="fas fa-briefcase" navItemClicked={this.handleJobsClick}  />
                                                }
                                        </li>
                                        <li className="nav_item messaging_icon">
                                                {
                                                        messagesClicked
                                                        ? <Icon name="fas fa-comments" navItemClicked={this.handleMessagesClick} />
                                                        : <Icon name="fas fa-comment-dots" navItemClicked={this.handleMessagesClick}  /> 
                                                }
                                        </li>
                                        <li className="nav_item notifications_icon">
                                                {
                                                        notificationsClicked
                                                        ? <Icon name="fas fa-bell" navItemClicked={this.handleNotificationsClick} theseStyles={this.notificationsTabStyles} />
                                                        : <Icon name="fas fa-bell" navItemClicked={this.handleNotificationsClick} />
                                                }
                                        </li>
                                </ul>
                        </nav>
                )
        }
}

export default Navbar
