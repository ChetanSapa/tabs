import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/nav-bar";
import PersonalInfoComponent from "./components/personal-info";
import SkillsComponent from "./components/skills";


function App() {
    return (
        <BrowserRouter>
            <div className={'main-app'}>
                <Navbar/>
                <div>
                    <Routes>
                        <Route exact path={'/'} element={<PersonalInfoComponent/>}/>
                        <Route path="/skills" element={<SkillsComponent/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
