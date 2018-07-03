import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../images/logo.png'

import {mapStateToProps, mapActionToProps}  from './redux.js'
import './styles.css'

class Header extends Component {
    state = {
        visibleMenu: true,
    }
    changeMenuStatus = () => {
        this.setState({
            visibleMenu: !this.state.visibleMenu
        })
    }
    render () {
        const {
            auth,
            firstName,
            lastName,
            logOut
        } = this.props
    const {
        visibleMenu
    } = this.state
        return (
            <header className="header">
                {
                    auth && (
                    <div>
                        {`${firstName} ${lastName}`}
                    </div>
                    )
                }

                <button
                    className="btnTumbler"
                    onClick={this.changeMenuStatus}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>


                {
                    visibleMenu && (
                        <ul className="navList">
                            <li><Link to="/toDo">To do list</Link></li>
                            <li><Link to="/">Blog list</Link></li>
                            {
                                !auth ? (
                                    <li><Link to="/login">Login</Link></li>
                                ) : (
                                    <li onClick={logOut}>Logout</li>
                                )
                            }
                            <li><Link to="/about">About Me</Link></li>
                        </ul>
                    )
                }
                <img src={logo} className="header_Logo" alt="LOGO" />
            </header>
        )
    }
}

export default connect (
    mapStateToProps,
    mapActionToProps
)(Header)