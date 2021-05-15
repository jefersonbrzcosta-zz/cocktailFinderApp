export enum GeneralTypes {
  GET_COCKTAILS_LIST = 'GET_COCKTAILS_LIST',
  SET_COCKTAILS_LIST = 'SET_COCKTAILS_LIST',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
}

export interface CocktailProps {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface GeneralState {
  cocktailList: CocktailProps[];
  isLoading: boolean;
  isError: boolean;
}

export type ApiCallInterface<Response> = {
  drinks: any;
};
