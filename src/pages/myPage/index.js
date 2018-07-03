import React, {Component} from 'react'
import photo from '../../images/me.jpg'

import './style.css'

class MyPage extends Component {
    render() {
        return (
            <div
                className="about"
            >
                <img src={photo} className="myPhoto" alt="myFace"/>
                <h3>Personal skills</h3>
                <p>Good communications skills, good analytical skills, open-minded, proactive team player,
                    goal-oriented, multitask, quick learner, attentive to details, with positive approach to the
                    life</p>
            </div>
        )

    }
}

MyPage.propTypes = {};

export default MyPage

