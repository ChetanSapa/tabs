import {useForm} from "react-hook-form";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSkill, setSkill} from "../../store/skills-reducer";
import {sendSkillsInfo} from "../../api/api";


const SkillsComponent = () => {

    const skills = useSelector((state) => state.skills)
    const dispatch = useDispatch()
    console.log(skills)
    const sendSkills = (skills) => {
       dispatch(sendSkillsInfo(skills))
        console.log(skills)
    }

    const deleteSkill = (skill) => {
        console.log(skill)
        dispatch(removeSkill(skill))
    }
    useEffect(() => {
        console.log(skills)
    },[skills])

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({mode: "onChange"})

    const onSubmit = (data, e) => {
        let skill = Object.values(data)
        dispatch(setSkill(skill))
        console.log(data)
        e.target.reset()
        reset({})
    }
    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className={'main'}>
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
                <SkillsList skills={skills} deleteSkill={deleteSkill}/>
            </div>

            <button style={{marginTop: '1rem'}} type='submit' onClick={() => sendSkills(skills)}>Save</button>
        </div>
    )
}

const SkillsList = (props) => {
    console.log(props)
    return <div>
        {props.skills ? props.skills.map((s) =>
            <div key={s}>
            <input type="text" defaultValue={s}/>
                <button onClick={() => props.deleteSkill(s)}> - </button>
            </div>
        ).reverse() : null}
    </div>
}
export default SkillsComponent