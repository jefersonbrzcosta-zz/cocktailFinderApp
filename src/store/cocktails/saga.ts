import {put, takeLatest} from 'redux-saga/effects';
import {fetchCocktails} from '../../api/index';
import {GeneralTypes} from './types';

function* getCocktailList(searchParams: any) {
  try {
    yield put({type: GeneralTypes.SET_LOADING, payload: true});
    const dataResponse = yield fetchCocktails(searchParams.payload);
    if (dataResponse.drinks) {
      const list = dataResponse.drinks.map(drink => {
        return {
          drinkName: drink.strDrink,
          drinkPhoto: drink.strDrinkThumb,
          id: drink.idDrink,
        };
      });
      yield put({type: GeneralTypes.SET_COCKTAILS_LIST, payload: list});
    }
    yield put({type: GeneralTypes.SET_LOADING, payload: false});
  } catch (error) {
    console.error(error);
  }
}

function* cocktailSaga() {
  yield takeLatest(GeneralTypes.GET_COCKTAILS_LIST, getCocktailList);
}

export {cocktailSaga};
