const paginate = (drinks) => {
  if (!drinks) return;
  const perPage = 5;
  const numberOfBtns = Math.ceil(drinks.length / perPage);
  const newDrinks = Array.from({ length: numberOfBtns }, (_, index) => {
    const start = index * perPage;
    return drinks.slice(start, start + perPage);
  });
  return newDrinks;
};
export default paginate;
