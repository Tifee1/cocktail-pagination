import { showLoading } from './toggleLoading.js';

const fetchData = async (url) => {
  showLoading();
  const response = await fetch(url);
  const data = await response.json();
  const drinks = data.drinks;
  return drinks;
};
export default fetchData;
