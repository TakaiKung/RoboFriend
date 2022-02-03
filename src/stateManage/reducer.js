import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAIL, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from "./constants"

const initialState = {
    searchField : ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD :
            return { ...state, searchField: action.payload }
        default:
            return state
    }
}

const initialStateReq = {
    isPending : false,
    robots : [],
    error : ''
}

export const requestRobots = (state=initialStateReq, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING :
            return { ...state, isPending: true } 
        case REQUEST_ROBOTS_SUCCESS : 
            return { ...state, isPending : false, robots : action.payload }
        case REQUEST_ROBOTS_FAIL :
            return {...state , isPending : false, error : action.payload }
        default :
            return state
    }
} 