import { INCREMENT, DECREMENT, ADD_PERSON, ADD_PERSON_EDIT, ADD_PERSON_EDIT_OFF, DEL_PERSON, EDIT_PERSON, CLOSE_EDIT, SAVE_EDIT } from '../action-types'

export const increment = () => {
    return {
        type: INCREMENT
    }
}
export const decrement = () => {
    return {
        type: DECREMENT
    }
}
export const addPerson = (newPerson) => {
    return {
        type: ADD_PERSON,
        newPerson
    }
}
export const addPersonEdit = () => {
    return {
        type: ADD_PERSON_EDIT,
    }
}
export const addPersonEditOff = () => {
    return {
        type: ADD_PERSON_EDIT_OFF,
    }
}
export const delPerson = (id) => {
    return {
        type: DEL_PERSON,
        id
    }
}
export const editPerson = (id) => {
    return {
        type: EDIT_PERSON,
        id
    }
}
export const closeEdit = (id) => {
    return {
        type: CLOSE_EDIT,
        id
    }
}
export const saveEdit = (obj) => {
    return {
        type: SAVE_EDIT,
        obj
    }
}