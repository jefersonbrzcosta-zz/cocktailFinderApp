import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {cocktailSaga} from './cocktails/saga';
import cocktailReducer from './cocktails/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createStore(
  cocktailReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(cocktailSaga);

export default rootReducer;
