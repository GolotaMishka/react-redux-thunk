import {createStore as createReduxStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createReduxStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));