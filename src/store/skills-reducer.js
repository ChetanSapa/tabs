const SET_SKILL = 'ADD_SKILL'
const REMOVE_SKILL = 'REMOVE_SKILL'
const SAVE_SKILLS = 'SAVE_SKILLS'

const initialState = {
    skills: []
}

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SKILL:
            return {...state, skills: [...state.skills, action.payload[0]] }
        case REMOVE_SKILL:
            return {...state}
        case SAVE_SKILLS:
            return {...state, skills: action.payload}
        default:
            return state
    }
}

export const setSkill = (skill) => ({type: SET_SKILL, payload:skill})
export const removeSkill = (skill) => ({type: REMOVE_SKILL, skill})
export const sandSkills = (skills) => ({type: SAVE_SKILLS, skills})

export default skillsReducer