import { ADD_PERSON_EDIT, ADD_PERSON_EDIT_OFF } from '../action-types'



const addPersonEdit = (state = false, action) => {
    switch (action.type) {
        case ADD_PERSON_EDIT:
            return state = true
        case ADD_PERSON_EDIT_OFF:
            return state = false
        default:
            return state;
    }
}

export default addPersonEdit;