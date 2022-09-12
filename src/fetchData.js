const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const drinks = data.drinks;
  return drinks;
};
export default fetchData;
