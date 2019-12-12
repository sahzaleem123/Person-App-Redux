import { ADD_PERSON, DEL_PERSON, EDIT_PERSON, CLOSE_EDIT, SAVE_EDIT } from '../action-types'

const initialState = [
    {
        id: 1,
        name: 'Arif',
        work: 'Front-End developer',
        isEditable: false,
    },
    {
        id: 2,
        name: 'Waqas',
        work: 'Back-End developer',
        isEditable: false,
    },
    {
        id: 3,
        name: 'Sadaf',
        work: 'Quality Assurance',
        isEditable: false,
    },
]

const handlePerson = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return [...state, action.newPerson]
        case DEL_PERSON:
            return state.filter(e => e.id !== action.id)
        case EDIT_PERSON:
            let persons = [...state]
            // console.log(action.id)
            persons.forEach(e => {
                if (e.id === action.id) {
                    e.isEditable = true
                }
            });
            // console.log(persons)
            return state = persons
        case CLOSE_EDIT:
            let persons1 = [...state]
            // console.log(action.id)
            persons1.forEach(e => {
                if (e.id === action.id) {
                    e.isEditable = false
                }
            });
            // console.log(persons)
            return state = persons1
        case SAVE_EDIT:
            console.log(action.obj)
            let obj = action.obj;
            let persons2 = [...state]
            persons2.forEach(e => {
                if (e.id === action.obj.id) {
                    console.log('dsadad')
                    e.id = obj.id
                    e.name = obj.name
                    e.work = obj.work
                    e.isEditable = false
                }
            });
            console.log(persons2)
            return state = persons2
        default:
            return state
    }
}
export default handlePerson