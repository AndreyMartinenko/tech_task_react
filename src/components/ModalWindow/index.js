import React, {Component} from 'react'
import './style.css'
import logoLMind from '../../images/logoLMind.png'

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
                        <img src={logoLMind} className="ModalLogo" alt=""/>
                        <div className="closeModWindow"
                             onClick={close}
                        >
                            Close =X=
                        </div>
                    </div>
            </div>
        )
    }

}

export default ModalWindow