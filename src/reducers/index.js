import { combineReducers } from 'redux'
import countries from './countries'
import converter from './converter'

export default combineReducers({
    countries: countries,
    converter: converter
})