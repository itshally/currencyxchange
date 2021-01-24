import axios from 'axios'
import {
    GET_ALL_COUNTRIES,
    CONVERT_CURRENCY
} from './types'


const key = process.env.REACT_APP_API_KEY
console.log(key)

export const getAllCountries = () => {
    
    return (dispatch) => {
        axios.get(`https://free.currconv.com/api/v7/countries?apiKey=${key}`)
        .then( response => {
            const data = response.data
            dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        })
        .catch( error => console.log(error))
    }
}

export const convertCurrency = (country1, country2) => {
    return (dispatch) => {
        axios.get(`https://free.currconv.com/api/v7/convert?apiKey=${key}&q=${country1}_${country2}&compact=y`)
        .then( response => {
            const data = response.data
            dispatch({
                type: CONVERT_CURRENCY,
                payload: data
            })
            console.log('data', data)
        })
        .catch( error => console.log(error))
    }
}