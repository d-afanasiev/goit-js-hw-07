const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const refs = {
  listIngredients: document.querySelector("#ingredients"),
  arrList: [],

  insertIngredient(ingredients) {
    ingredients.map((ingredient) => {
      const itemsIngredients = document.createElement("li");
      itemsIngredients.textContent = ingredient;
      this.arrList.push(itemsIngredients);
    });
    this.listIngredients.append(...this.arrList);
  },
};

refs.insertIngredient(ingredients);
