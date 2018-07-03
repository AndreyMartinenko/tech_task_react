import React, { Component } from 'react'
import {connect} from 'react-redux'

import List from './components/List'
import {mapStateToProps, mapActionToProps } from './redux.js'
import ModalWindow from '../ModalWindow'

import './style.css'


class ToDoListWithRedux extends Component {
    state = {
        value: '',
        modalVisible: false
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
            <div className="add">
                <label className="label"><h3>Input few elements</h3></label>
                <input
                    type="text"
                    maxLength="15"
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
                                You've inputted more than 3 elements
                            </ModalWindow>
                        ) : ''
                }
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(ToDoListWithRedux)



















