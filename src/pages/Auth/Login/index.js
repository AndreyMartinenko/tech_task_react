import React, {Component} from 'react'
import { connect } from 'react-redux'
import {MapStateToProps, MapActionToProps} from './redux.js'

import './style.css'

const user = {
    email: 'and@mart',
    password: 'qwe',
    firstName: 'Andrii',
    lastName: 'Martin'
}
class Login extends Component {
    state = {
        email: '',
        password: '',
        error: false
    }
    submit = () => {
        if (
            this.state.email === user.email &&
            this.state.password === user.password
        ) {
            this.setState({error: false})
            this.props.login(user)
        } else {
            this.setState({error: true})
        }
    }
    render () {
        return (
            <div className="loginWrapper">
                <input
                    type="text"
                    onChange={(e) => this.setState({email: e.target.value})}
                />
                <input
                    type="password"
                    onChange={(e) => this.setState({password: e.target.value})}
                />
                { this.state.error && 'not valid data' }
                <button
                    onClick={this.submit}
                >
                    Login
                </button>
            </div>
        )
    }
}

export default connect(
    MapStateToProps,
    MapActionToProps
) (Login)