import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinkDesc = (drink) => {
  hideLoading();
  const { strDrink: name, strDrinkThumb: img, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const drinkImg = get('.drink-img');
  const drinkName = get('.drink-name');
  const drinkDesc = get('.drink-desc');
  const drinkIngr = get('.drink-ingredients');

  document.title = name;
  drinkImg.src = img;
  drinkName.textContent = name;
  drinkDesc.textContent = desc;
  drinkIngr.innerHTML = list
    .map((ingr) => {
      if (!ingr) return;
      return `<li><i class='far fa-check-square'></i>${ingr}</li>`;
    })
    .join('');
};

export default displayDrinkDesc;
