import {addPersonalInfo, getOccupation,} from "../store/personal-info-reducer";

const url = 'https://jsonplaceholder.typicode.com/'

export const fetchOccupation = () => {
    return dispatch => {
        fetch(url + 'users')
            .then(response => response.json())
            .then(json => dispatch(getOccupation(json.map(i => i.address.city))))
    }
}

export const sendPersonalInfo = (data) => {
    return dispatch => {
        fetch(url + 'posts', {
            method: 'POST',
            body: JSON.stringify({
                title: data.firsName,
                body: data.secondName,
                userId: data.occupation,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(response => {
                dispatch(addPersonalInfo(data),
                    console.log(response)
                )
            })
    }
}
export const sendSkillsInfo = (data) => {
        fetch(url + 'posts', {
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(response => {
                    console.log(response)
            })
}