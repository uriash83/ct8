import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import authReducer from './authReducer';
import hikeReducer from './hikeReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    hike: hikeReducer
});