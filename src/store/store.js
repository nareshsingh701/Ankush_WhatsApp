import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

//Custom Imports
import rootReducer from "../reducers/index";

const enhancer = compose(
    applyMiddleware(
        thunk,
        createLogger({
            predicate: () => __DEV__,
        }),
    ),
);


const store = createStore(rootReducer, {}, enhancer);
export default store;