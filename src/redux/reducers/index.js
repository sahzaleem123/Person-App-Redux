import countReducer from './counter';
import personsReducer from './person';
import { combineReducers } from 'redux';
import addPersonEdit from './edit'

const rootReducer = combineReducers({
    counter: countReducer,
    persons: personsReducer,
    editable: addPersonEdit
})
export default rootReducer