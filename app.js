import './src/searchDrinks.js';
import get from './src/getElement.js';
import displayAllDrinks from './src/displayAllDrinks.js';
import paginate from './src/paginate.js';
import displayButtons from './src/displayButtons.js';
import fetchData from './src/fetchData.js';
import './src/setDrink.js';
import setDrink from './src/setDrink.js';

const btnContainer = get('.btn-container');

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=i';
let index = 0;
let page = [];

// console.log(drinks)

const displayUI = async () => {
  const section = await displayAllDrinks(page[index]);
  displayButtons(page, index);
  if (section) {
    setDrink(section);
  }
};
export const init = async (url) => {
  const drinks = await fetchData(url);

  if (!drinks) {
    // console.log('no item in array');
    displayAllDrinks();
    displayButtons();
    return;
  }
  page = paginate(drinks);
  displayUI();
};

btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-container')) return;
  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > page.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = page.length - 1;
    }
  }
  displayUI();
});

window.addEventListener('DOMContentLoaded', () => {
  init(URL);
});
