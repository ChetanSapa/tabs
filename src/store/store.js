import {createStore, applyMiddleware} from "redux";
import {combineReducers} from "redux";
import personalInfoReducer from "./personal-info-reducer";
import skillsReducer from "./skills-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    personalInfoReducer: personalInfoReducer,
    skillsReducer: skillsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))