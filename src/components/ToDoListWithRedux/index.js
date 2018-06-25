import React, { Component } from 'react'
import {connect} from 'react-redux'

import List from './components/List'
import ModalWindow from '../ModalWindow'


class ToDoListWithRedux extends Component {
    state = {
        value: '',
        modalVisible: true
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.toDo.length > 3) {
            this.setState({modalVisible: true})
        }
    }
    componentDidMount () {
        this.elem.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                this.handleClickBtn()
            }
        })
    }
    handleClickBtn = () => {
        if (this.state.value) {
            this.props.addElementToList(this.state.value)
            this.setState({value: ''})
        }
    }
    handleChangeValue = (e) => {
        this.setState({value: e.target.value})
    }
    render () {
        const {value} = this.state
        return (
            <div>
                <input
                    type="text"
                    onChange={this.handleChangeValue}
                    value={value}
                    ref={elem => {this.elem = elem}}
                />
                <button
                    onClick={this.handleClickBtn}
                >
                    Add
                </button>
                <List/>
                {
                    this.state.modalVisible ?
                        (
                            <ModalWindow
                                close={
                                    () => this.setState(
                                        {modalVisible:false}
                                        )
                                }
                            >
                                more 3 elements
                            </ModalWindow>
                        ): ''
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    toDo: state.toDo
})
const mapActionToProps = dispatch =>({
    addElementToList (value) {
        dispatch({type:'ADD_ELEMENT', payload: value})
    }
})

export default connect(
    mapStateToProps,
    mapActionToProps
)(ToDoListWithRedux)



















