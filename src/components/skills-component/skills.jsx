import {useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSkill} from "../../store/skills-reducer";
import {sendSkillsInfo} from "../../api/api";


const SkillsComponent = () => {

    const skills = useSelector((state) => state.skills.skills)
    const dispatch = useDispatch()

    const sendSkills = (skills) => {
        sendSkillsInfo(skills)
        console.log(skills)
    }
    useEffect(() => {
        console.log(skills)
    },[skills])

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"})

    const onSubmit = (data, e) => {
        let skill = Object.values(data)
        dispatch(setSkill(skill))
        console.log(data)
        e.target.reset()
    }
    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div style={{marginTop: '1rem'}}>
                        <div>Skills</div>
                        <input type="text" {...register('Skill', {
                            required: true,
                            maxLength: 25
                        })}/>
                        <button>+</button>
                        {errors.Skill && <i>Skill.error.required</i>}
                    </div>
                </div>
            </form>
            <div>
                <SkillsList skills={skills}/>
            </div>

            <button style={{marginTop: '1rem'}} type='submit' onClick={() => sendSkills(skills)}>Save</button>
        </div>
    )
}

const SkillsList = (props) => {

    return <div>
        {props.skills ? props.skills.map((s) =>
            <div>
            <input key={s} type="text" value={s}/>
                <button> -</button>
            </div>
        ).reverse() : <span>Some error</span>}
    </div>
}
export default SkillsComponent