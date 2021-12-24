import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";


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

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"})

    const onSubmit = data => console.log({firstName: data.firstName,
            lastName: data.lastName,
        occupationCode: data.occupation
                    })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{
                display: 'flex',
                flexDirection: "row",
                justifyContent: 'space-around',
                width: '300px'
            }}>
                <div>
                    <div>
                        <div>Name</div>
                        <input type="text" {...register('firstName', {required: true, maxLength: 15})}/>
                        {errors.firstName && <i>name.error.required</i>}
                    </div>
                    <div>
                        <div>Surname</div>
                        <input type="text" {...register('lastName', {required: true })}/>
                        {errors.lastName && <i>surname.error.required</i>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>Occupation</div>
                        <select value={'ASTRONAUT'} {...register('occupation', )} onChange={() => {
                        }}>
                            <option value="PRESIDENT">President</option>
                            <option value="PHILANTHROPIST">Bill Gates</option>
                            <option value="ASTRONAUT">Astronaut</option>
                            <option value="JOCKEY">Jockey</option>
                        </select>
                    </div>
                    <input type="submit"/>
                </div>
            </div>
        </form>
    )
}

const SkillsComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"})

    const onSubmit = data => console.log(Object.values(data))
    const response = []
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <div>
                <div>Skills</div>
                <input type="text" {...register('Skill1', {required: true, maxLength: 25})}/>
                <button> +</button>
                {errors.firstName && <i>name.error.required</i>}
            </div>
            <div>
                <input type="text" {...register('SkillN', {required: true, maxLength: 25})}/>
                {errors.firstName && <i>name.error.required</i>}
                <button> -</button>
            </div>
            <input type="submit"/>
        </div>
        </form>
    )
}

export default App;
