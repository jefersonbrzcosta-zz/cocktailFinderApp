import {action} from 'typesafe-actions';
import {CocktailProps, GeneralTypes} from './types';

export const getCocktails = (searchParams: string) =>
  action(GeneralTypes.GET_COCKTAILS_LIST, searchParams);

export const setCocktails = (cocktails: CocktailProps[]) =>
  action(GeneralTypes.SET_COCKTAILS_LIST, cocktails);

export const setLoading = (loading: boolean) =>
  action(GeneralTypes.SET_LOADING, loading);

export const setError = (error: boolean) =>
  action(GeneralTypes.SET_ERROR, error);
