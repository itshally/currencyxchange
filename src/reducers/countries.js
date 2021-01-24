import {GET_ALL_COUNTRIES} from '../actions/types'

const INITIAL_STATE = {
    loading: true, 
    country_list: []
}

const countries = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_ALL_COUNTRIES:
            return {
                loading: false,
                country_list: action.payload
            }
        default:
            return state
    }
}

export default countries