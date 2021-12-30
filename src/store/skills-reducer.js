const ADD_SKILL = 'ADD_SKILL'
const ONCHANGE_SKILL_INFO = 'ONCHANGE_SKILL_INFO'
const REMOVE_SKILL = 'REMOVE_SKILL'
const SAVE_SKILLS = 'SAVE_SKILLS'

const initialState = {}

const skillsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SKILL:
            return {...state, skill: action.payload}
        case ONCHANGE_SKILL_INFO:
            return {...state, newInfo: action.payload}
        case REMOVE_SKILL:
            return {...state}
        case SAVE_SKILLS:
            return {...state, skills: action.payload}
        default:
            return state
    }
}

export const addSkill = (skill) => ({type: ADD_SKILL, payload:skill})
export const onChangeSkillInfo = (newInfo) => ({type: ONCHANGE_SKILL_INFO, payload: newInfo})
export const removeSkill = (skill) => ({type: REMOVE_SKILL, skill})
export const saveSkills = (skills) => ({type: SAVE_SKILLS, skills})

export default skillsReducer