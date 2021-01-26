import {
    DISPLAY_API_USAGE
} from '../actions/types'

const INITIAL_STATE = {
    limit: []
}

const apiUsage = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DISPLAY_API_USAGE: {
            return {
                limit: action.payload
            }
        }
        default:
            return state
    }
}

export default apiUsage