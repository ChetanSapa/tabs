import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/nav-bar-component/navigation";
import PersonalInfoComponent from "./components/personal-info-component/personalInfo";
import SkillsComponent from "./components/skills-component/skills";


function App() {
    return (
        <BrowserRouter>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'space-around',
                marginTop: '100px',
            }}>
                <Navbar/>
                <div style={{display: 'flex', justifyContent: 'space-around', border: '1px grey solid'}}>
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
