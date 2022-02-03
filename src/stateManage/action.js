import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAIL, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from "./constants";

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = (dispatch) => {
    const api = 'https://takaikung.github.io/RoboFriend/jsonplaceholder.typicode.com/users'
    dispatch({ type : REQUEST_ROBOTS_PENDING })
    fetch(api.replace('takaikung.github.io/RoboFriend/', ''))
        .then(response => response.json())
        .then(data => dispatch({ type : REQUEST_ROBOTS_SUCCESS, payload : data }))
        .catch(error => dispatch({ type : REQUEST_ROBOTS_FAIL, payload : error }))
}
