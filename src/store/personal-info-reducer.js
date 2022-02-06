const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO'
const GET_OCCUPATION = 'GET_OCCUPATION'

const initialState = {
    firstName: '',
    secondName: '',
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
                // personalInfo: [...state.personalInfo, ...action.payload]
            }
        default:
            return state
    }
}
export const getOccupation = (newOccupation) => ({type: GET_OCCUPATION, payload: newOccupation})
export const addPersonalInfo = (currentPersonalInfo) => ({type: ADD_PERSONAL_INFO, payload: currentPersonalInfo})

export default personalInfoReducer