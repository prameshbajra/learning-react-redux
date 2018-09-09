import { createStore, combineReducers } from 'redux';
import { itemReducer } from './Reducers';

const rootReducers = combineReducers({
    itemReducer: itemReducer
});

const Store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;

