import React, {Component} from 'react'
import './style.css'

class ModalWindow extends Component {
    onClick = (e) => {
        e.stopPropagation()
    }
    render () {
        console.log(this.props)
        const {close, children} = this.props
        return (
            <div
                onClick={close}
                className="outSide"
            >
                    <div
                        className="inSide"
                        onClick={this.onClick}
                    >
                        {children}
                    </div>
            </div>
        )
    }

}

export default ModalWindow