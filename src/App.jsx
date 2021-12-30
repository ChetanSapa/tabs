import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/nav-bar-component/navigation";
import PersonalInfoComponent from "./components/personal-info-component/personalInfo";


function App() {
    return (
        <BrowserRouter>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'space-around',
                marginTop: '100px',
                // width: '800px'
            }}>
                <Navbar/>
                {/*<PersonalInfoComponent />*/}
                {/*<SkillsComponent/>*/}
                <div style={{display: 'flex',justifyContent: 'space-around',  border: '1px grey solid'}}>
                    <Routes >
                        <Route exact path={'/'} element={<PersonalInfoComponent />}/>
                        <Route path="/skills" element={<SkillsComponent />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

// const PersonalInfoComponent = () => {
//     const dispatch = useDispatch
//     // const repos = useSelector(state => state.repos.item)
//     // useEffect(() => {
//     //     dispatch(getOccupationList())
//     // },[])
//
//     const {
//         register,
//         handleSubmit,
//         formState: {errors},
//     } = useForm({mode: "onChange"})
//
//     function onSubmit(data) {
//         dispatch(addPersonalInfoAC(data))
//         // console.log({firstName: data.firstName,
//         //         // lastName: data.lastName,
//         //         // occupationCode: data.occupation
//         // })
//         console.log(data)
//     }
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div style={{
//                 display: 'flex',
//                 flexDirection: "row",
//                 justifyContent: 'space-around',
//                 // width: '300px',
//                 border: '1px, grey solid'
//             }}>
//                 <div>
//                     <div>
//                         <div>Name</div>
//                         <input type="text" {...register('firstName', {required: true, maxLength: 15})}/>
//                         {errors.firstName && <i>name.error.required</i>}
//                     </div>
//                     <div>
//                         <div>Surname</div>
//                         <input type="text" {...register('lastName', {required: true})}/>
//                         {errors.lastName && <i>surname.error.required</i>}
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                         <div>Occupation</div>
//                         <select value={'ASTRONAUT'} {...register('occupation',)} onChange={() => {
//                         }}>
//                             <option value="PRESIDENT">President</option>
//                             <option value="PHILANTHROPIST">Bill Gates</option>
//                             <option value="ASTRONAUT">Astronaut</option>
//                             <option value="JOCKEY">Jockey</option>
//                         </select>
//                     </div>
//                     <input type="submit"/>
//                 </div>
//             </div>
//         </form>
//     )
// }

const SkillsComponent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({mode: "onChange"})

    const onSubmit = data => console.log(Object.values(data))
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
