import {combineReducers} from 'redux'
import toDoList from './toDoList.js'
import auth from './auth'

export default combineReducers({
    toDo: toDoList,
    auth
})