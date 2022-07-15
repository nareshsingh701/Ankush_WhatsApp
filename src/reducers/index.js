import { combineReducers } from 'redux';

//Custom Imports
import { counterReducer } from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;