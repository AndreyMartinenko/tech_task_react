import React, {Component} from 'react'

import './style.css'
import NotFound from "../404";

class MyPage extends Component {
    render() {
        return (
            <div
                className="about"
            >
                <h1>it's my page</h1>
                <img src="" alt=""/>
                <p>some text</p>
            </div>
        )

    }
}
MyPage.propTypes = {};


export default MyPage

