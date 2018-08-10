import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'

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
        visibleMenu
    } = this.state
        return (
            <header className="header">
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
                            <li><Link to="/galery">Galery</Link></li>
                            <li><Link to="/">Posts List</Link></li>
                            <li><Link to="/upload">Upload</Link></li>
                        </ul>
                    )
                }
                <img src={logo} className="header_Logo" alt="LOGO" />
            </header>
        )
    }
}
export default Header