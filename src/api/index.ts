import axios from 'axios';

export const fetchCocktails = async (searchParams: string) => {
  const SERVICE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParams}`;
  const response = await axios.get(SERVICE_URL);
  return response.data;
};
