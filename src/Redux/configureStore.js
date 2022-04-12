import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Stocksreducer from './stocks/stockreducer';

const reducer = combineReducers({
  stocks: Stocksreducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
