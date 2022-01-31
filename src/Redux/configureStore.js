import { createStore, combineReducers, applyMiddleware } from 'redux';
import Stocksreducer from './stocks/stockreducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
stocks : Stocksreducer
})

export const store = createStore(
    reducer,
    applyMiddleware(thunk),
  );
  