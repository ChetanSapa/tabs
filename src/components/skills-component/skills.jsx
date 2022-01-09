import {useForm} from "react-hook-form";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const SkillsComponent = () => {

    const dispatch = useDispatch()
    const skills = useSelector(state => state.skills)

    const addSkill = (skill) => {
        dispatch(skill)
    }

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"})

    const onSubmit = data => console.log(Object.values(data))
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div style={{marginTop: '1rem'}}>
                    <div>Skills</div>
                    <input type="text" {...register('Skill', {required: true, maxLength: 25})}/>
                    <button> +</button>
                    {errors.Skill && <i>Skill.error.required</i>}
                </div>
                {/*<div>*/}
                {/*    <input type="text" {...register('Skill1', {required: true, maxLength: 25})}/>*/}
                {/*    {errors.firstName && <i>name.error.required</i>}*/}
                {/*    <button> -</button>*/}
                {/*</div>*/}
                <input style={{marginTop: '1rem'}} type="submit"/>
            </div>
        </form>
    )
}

export default SkillsComponent