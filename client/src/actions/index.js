import axios from 'axios';
import { FETCH_USER,CREATE_HIKE }  from './types'

const config = {
    withCredentials: true,
    headers: {
        'Content-Type':'application/json',
    },
}

export const fetchUser = () => {
    return function (dispatch) {
        axios
            .get('/api/current_user',config)
            .then(res => dispatch({
                type: FETCH_USER,
                payload: res.data
            }))
    }
    
}

export const submitHikeForm = values => async dispatch => {
    console.log('valurs',values)
    dispatch({ type: CREATE_HIKE, payload: values})
    //return { type : 'submit_hike'}
}

/*



export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data })
    
    
}

export const fetchUser = () => {
    return function (dispatch) {
        axios
            .get('/api/current_user')
            .then(res => dispatch({
                type: FETCH_USER,
                payload: res.data
            }))
    }
    
}


*/