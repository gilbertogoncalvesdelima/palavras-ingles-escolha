import { combineReducers } from 'redux';
import termReducer from './termReducer';

const rootReducer = combineReducers({
    terms: termReducer,
});

export default rootReducer;
