import fetchData from './fetchData.js';
import displayAllDrinks from './displayAllDrinks.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';
import get from './getElement.js';

const btnContainer = get('.btn-container');

export const presentDrinks = async (url, index) => {
  const data = await fetchData(url);
  const drinks = data.drinks;
  // display drinks
  displayAllDrinks(drinks);
  displayButtons(drinks, index);
};
