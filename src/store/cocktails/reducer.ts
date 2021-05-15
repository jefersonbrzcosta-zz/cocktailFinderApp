import {Reducer} from 'redux';
import {GeneralState, GeneralTypes} from './types';

const INITIAL_STATE: GeneralState = {
  cocktailList: [],
  isLoading: false,
  isError: false,
};

const cocktailReducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GeneralTypes.SET_COCKTAILS_LIST:
      return {...state, cocktailList: action.payload};
    case GeneralTypes.SET_LOADING:
      return {...state, isLoading: action.payload};
    case GeneralTypes.SET_ERROR:
      return {...state, isError: action.payload};
    default:
      return state;
  }
};

export default cocktailReducer;
