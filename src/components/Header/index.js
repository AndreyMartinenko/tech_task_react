import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

class Header extends Component {
    render () {
        return (
            <header className="header">
                this is header
                <ul className="navList">
                    <li><Link to="ToDo">To do list</Link></li>
                    <li><Link to="/">Blog list</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header