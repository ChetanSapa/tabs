const SET_SKILL = 'ADD_SKILL'
const REMOVE_SKILL = 'REMOVE_SKILL'
const SAVE_SKILLS = 'SAVE_SKILLS'
const RESET_STATE = 'RESET_STATE'

const initialState = []

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SKILL:
            return [...state, action.payload[0]]
        case REMOVE_SKILL:
            return [...state.filter(s => s !== action.payload.toString())]
        case SAVE_SKILLS:
            return {...state}
        case RESET_STATE:
            state = []
            return [...state]
        default:
            return state
    }
}

export const setSkill = (skill) => ({type: SET_SKILL, payload: skill})
export const removeSkill = (skill) => ({type: REMOVE_SKILL, payload: skill})
export const saveSkills = (skills) => ({type: SAVE_SKILLS, skills})
export const resetState = () => ({type: RESET_STATE})

export default skillsReducer