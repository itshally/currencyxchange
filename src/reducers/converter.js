import {
    CONVERT_CURRENCY
} from '../actions/types'

const INITIAL_STATE = {
    loading: true,
    converted_result: []
}

const converter = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CONVERT_CURRENCY:
            return {
                ...state,
                loading: false,
                    converted_result: action.payload
            }
            default:
                return state
    }
}

export default converter