const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    if (id) {
      localStorage.setItem('drinks', id);
    }
  });
};
export default setDrink;
