import get from './getElement.js';
import { init } from '../app.js';
import { showLoading } from './toggleLoading.js';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const form = get('.search-form');
const input = get("[name='drink']");

form.addEventListener('keyup', () => {
  // e.preventDefault();
  const value = input.value;
  const newUrl = `${baseUrl}${value}`;
  if (!value) return;

  init(newUrl);
});
