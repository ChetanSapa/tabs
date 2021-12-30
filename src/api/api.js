import {getOccupation,} from "../store/personal-info-reducer";

export const fetchOccupation = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(getOccupation(json.map(i => i.address.city))))
    }
}