import { combineReducers } from 'redux';
import { assignmentReducer, navbarReducer } from './assignmentReducer'

const rootReducer = combineReducers({
    assignmentList: assignmentReducer,
    navbar: navbarReducer,
})

export default rootReducer;