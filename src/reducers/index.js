import {
    combineReducers
} from 'redux'
import countries from './countries'
import converter from './converter'
import apiUsage from './apiUsage'

export default combineReducers({
    countries: countries,
    converter: converter,
    apiUsage: apiUsage
})