import fetchData from './src/fetchData.js';
import displayDrinkDesc from './src/displayDrinkDesc.js';

const displaySingleDrink = async () => {
  const id = localStorage.getItem('drinks');
  if (!id) {
    window.location.replace('./index.html');
  }
  const data = await fetchData(
    `https:///thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const drink = data[0];
  displayDrinkDesc(drink);
};

window.addEventListener('DOMContentLoaded', displaySingleDrink);
