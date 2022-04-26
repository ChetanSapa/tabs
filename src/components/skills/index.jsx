import {useForm} from "react-hook-form";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeSkill, setSkill} from "../../store/skills-reducer";
import {sendSkillsInfo} from "../../api/api";


const SkillsComponent = () => {
    const skills = useSelector((state) => state.skills)
    const dispatch = useDispatch()
    const sendSkills = (skills) => {
        dispatch(sendSkillsInfo(skills))
    }
    const deleteSkill = (skill) => {
        dispatch(removeSkill(skill))
    }
    // useEffect(() => {
    // }, [skills])

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({mode: "onChange"})

    const onSubmit = (data, e) => {
        let skill = Object.values(data)
        console.log(skill)
        dispatch(setSkill(skill))
        console.log(data)
        e.target.reset()
        reset({})
    }
    return (<div className={'mainSkillsCont'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'SkillsCont'}>
                    <span>Skills</span>
                    <div className={'addSkillInput'}>
                        <input type="text" {...register('Skill', {
                            required: true,
                            maxLength: 25
                        })}/>
                        <button className={'addSkillButton'}>+</button>
                    </div>
                    {errors.Skill && <i className={'errorStyle'}>Field required</i>}
                </div>
            </form>
            <div>
                <SkillsList skills={skills} deleteSkill={deleteSkill}/>
            </div>
            <div className={'submitButton'}>
                <input type="submit" onClick={() => sendSkills(skills)}/>
            </div>
        </div>
    )
}

const SkillsList = (props) => {
    return <div className={'skillsListCont'}>
        {props.skills ? props.skills.map((s) =>
            <div key={s} className={'removeSkillInput'}>
                <input type="text" defaultValue={s}/>
                <button  className={'removeSkillButton'} onClick={() => props.deleteSkill(s)}> -</button>
            </div>
        ).reverse() : null}
    </div>
}
export default SkillsComponent