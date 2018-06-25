import React, {Component} from 'react'
import './style.css'

class ModalWindow extends Component {
    render () {
        const {close} = this.props
        return (
            <div
                onClick={close}
                className="outSide"
            >
                    <div className="inSide">
                            hello bro
                    </div>
            </div>
        )
    }

}

export default ModalWindow