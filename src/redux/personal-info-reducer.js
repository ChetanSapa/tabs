const ADD_PERSONAL_INFO = 'ADD_PERSONAL_INFO'
const ONCHANGE_NAME_INFO = 'ONCHANGE_NAME_INFO'
const ONCHANGE_SURNAME_INFO = 'ONCHANGE_SURNAME_INFO'
const SELECTED_OCCUPATION = 'SELECTED_OCCUPATION'


const personalInfoReducer = (state, action) => {
    switch (action.type) {
        case ADD_PERSONAL_INFO:
            return {...state, personalInfo: action.info}
        case ONCHANGE_NAME_INFO:
            return {...state, nameInfo: action.nameInfo}
        case ONCHANGE_SURNAME_INFO:
            return {...state, surnameInfo: action.surnameInfo}
        case SELECTED_OCCUPATION:
            return {...state, occupation: action.occupation}
        default:
            return state
    }
}

export const addPersonalInfoAC = (personalInfo) => ({type: ADD_PERSONAL_INFO, personalInfo})
export const onChangeNameInfo = (nameInfo) => ({type: ONCHANGE_NAME_INFO, nameInfo})
export const onChangeSurnameInfo = (surnameInfo) => ({type: ONCHANGE_SURNAME_INFO, surnameInfo})
export const selectedOccupation = (occupation) => ({type: SELECTED_OCCUPATION, occupation})

export default personalInfoReducer