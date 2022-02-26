import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import React, {useEffect} from "react";
import {fetchOccupation, sendPersonalInfo} from "../../api/api";
import '../../App.css'

const PersonalInfoComponent = () => {
    const dispatch = useDispatch()
    let occupation = useSelector(state => state.personalInfo.occupation)

    useEffect(() => {
        dispatch(fetchOccupation())
    }, [dispatch])


    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({mode: "onChange"})

    function onSubmit(data, e) {
        let newData = {
            ...data, occupation: data.occupation.toUpperCase()
        }
        dispatch(sendPersonalInfo(newData))
        console.log(newData)
        e.target.reset()
        reset({})

    }

    if (occupation) {
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'mainPersonalInfoCont'}>
                        <div className={'leftSide'}>
                            <div className={"personalInfoInput"}>
                                <div>First Name</div>
                                <input {...register('firstName', {required: true, maxLength: 15})}/>
                                {errors.firstName && <i className={'errorStyle'}>Field required</i>}
                            </div>
                            <div className={"personalInfoInput"}>
                                <div>Second name</div>
                                <input type="text" {...register('lastName', {required: true})}/>
                                {errors.lastName && <i className={'errorStyle'}>Field required</i>}
                            </div>
                        </div>
                        <div className={'rightSide'}>
                            <div className={'personalInfoInput'}>
                                <div>Occupation</div>
                                <select  {...register('occupation', {required: true})} onChange={() => {
                                }}>
                                    {occupation.map(i => <option key={i} value={i.toUpperCase()}>{i}</option>)}
                                </select>
                                {errors.occupation && <i className={'errorStyle'}>Field required</i>}
                            </div>
                        </div>
                    </div>
                    <div className={'submitButton'}>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default PersonalInfoComponent