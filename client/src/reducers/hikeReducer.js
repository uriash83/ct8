import _ from 'lodash';
import {
    CREATE_HIKE
} from '../actions/types'

export default (state={},action) => {
    switch(action.type){
        case CREATE_HIKE:
            return{...state, [action.payload.Date]: action.payload}
        
        default:
            return state;
    }
}