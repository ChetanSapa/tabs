const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO'
const ONCHANGE_NAME_INFO = 'ONCHANGE_NAME_INFO'
const ONCHANGE_SURNAME_INFO = 'ONCHANGE_SURNAME_INFO'
const SELECTED_OCCUPATION = 'SELECTED_OCCUPATION'
const SET_REPOS = 'SET_REPOS'
const GET_OCCUPATION = 'GET_OCCUPATION'

const initialState = {
    firstName: ' ',
    lastName: '',
    occupation: []
}


const personalInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OCCUPATION:
            return {
                ...state,
                occupation: [...state.occupation, ...action.payload]
            }
        case ADD_PERSONAL_INFO:
            return {
                ...state,
                personalInfo: action.payload
            }
        default:
            return state
    }
}
export const getOccupation = (newOccupation) => ({type: GET_OCCUPATION, payload: newOccupation})
export const addPersonalInfo = (personalInfo) => ({type: ADD_PERSONAL_INFO, payload: personalInfo})
export const onChangeNameInfo = (nameInfo) => ({type: ONCHANGE_NAME_INFO, payload: nameInfo})

export default personalInfoReducer