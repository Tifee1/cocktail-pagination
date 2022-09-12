import paginate from './paginate.js';
import get from './getElement.js';

const btnContainer = get('.btn-container');

const displayButtons = (drinks, activeIndex) => {
  if (!drinks) {
    btnContainer.innerHTML = null;
    return;
  }
  let newBtns = drinks.map((_, index) => {
    return `<button class='page-btn ${
      index === activeIndex ? 'active-btn' : 'null'
    }' data-index='${index}'>${index + 1}</button>`;
  });
  newBtns.push(`<button class='next-btn'>next</button>`);
  newBtns.unshift(`<button class='prev-btn'>prev</button>`);
  btnContainer.innerHTML = newBtns.join('');
};
export default displayButtons;
