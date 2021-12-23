import React, {useState} from 'react';
import './App.css';

const initialState = [{
    code: "PRESIDENT",
    name: "President"
}, {
    code: "PHILANTHROPIST",
    name: "Bill Gates"
}, {
    code: "ASTRONAUT",
    name: "Astronaut"
}, {
    code: "JOCKEY",
    name: "Jockey"
}]


function App() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-around',
            marginTop: '100px',
            width: '800px'
        }}>
            <PersonalInfoComponent/>
            <SkillsComponent/>
        </div>
    );
}

const PersonalInfoComponent = () => {
    return (
        <div style={{ display: 'flex',
            flexDirection: "row",
            justifyContent: 'space-around',
            width: '300px'}}>
            <div>
                <div>
                    <div>Name</div>
                    <input type="text"/>
                </div>
                <div>
                    <div>Surname</div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div>
                    <div>Occupation</div>
                    <select value={'ASTRONAUT'} onChange={() => {
                    }}>
                        <option value="PRESIDENT">President</option>
                        <option value="PHILANTHROPIST">Bill Gates</option>
                        <option value="ASTRONAUT">Astronaut</option>
                        <option value="JOCKEY">Jockey</option>
                    </select>
                </div>
                <button onClick={() => {
                }}>Save
                </button>
            </div>
        </div>
    )
}

const SkillsComponent = () => {
    return (
        <div>
            <div>
                <div>Skills</div>
                <input type="text"/>
                <button> + </button>
            </div>
            <div>
                <input type="text"/>
                <button> - </button>
            </div>
        </div>
    )
}

export default App;
