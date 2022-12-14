import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';
const sectionCenter = get('.section-center');
const title = get('.title');

const displayAllDrinks = (drinks) => {
  if (!drinks) {
    hideLoading();
    title.textContent = ` sorry, no drinks matched your search`;
    sectionCenter.innerHTML = null;
    return;
  }
  hideLoading();
  title.textContent = '';
  sectionCenter.innerHTML = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: img } = drink;
      return `<a href="./drinks.html">
          <article class="cocktail" data-id="${id}">
            <img src="${img}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join('');
  return sectionCenter;
};

export default displayAllDrinks;
