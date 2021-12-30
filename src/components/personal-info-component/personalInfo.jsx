import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {addPersonalInfo, onChangeNameInfo} from "../../store/personal-info-reducer";
import React, {useEffect} from "react";
import {fetchOccupation} from "../../api/api";

const PersonalInfoComponent = () => {
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm({mode: "onChange"})

    function onSubmit(data, e) {
        let newData = {
            ...data, occupation: data.occupation.toUpperCase()
        }
        dispatch(addPersonalInfo(newData))
        e.target.reset()
    }

    useEffect(() => {
        dispatch(fetchOccupation())
    }, [])

    let occupation = useSelector(state => state.personalInfoReducer.occupation)
    console.log(occupation)

    useEffect(() => {
        dispatch(onChangeNameInfo(newName))
    }, [watch])
    let newName = watch('firstName')
    console.log(newName)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '20px',
                border: '1px, grey solid',
            }}>
                <div>
                    <div>
                        <div>First Name</div>
                        <input defaultValue={''} {...register('firstName', {required: true, maxLength: 15})}/>
                        {errors.firstName && <i>name.error.required</i>}
                    </div>
                    <div>
                        <div>Surname</div>
                        <input type="text" {...register('lastName', {required: true})}/>
                        {errors.lastName && <i>surname.error.required</i>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>Occupation</div>
                        <select  {...register('occupation',)} onChange={() => {
                        }}>
                            {occupation.map(i => <option value={i.toUpperCase()}>{i}</option>)}
                        </select>
                    </div>
                    <input type="submit"/>
                </div>
            </div>
        </form>
    )
}

export default PersonalInfoComponent