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
  itemsIngredients: document.createElement("li"),

  insertIngredient(ingredient) {
    const item = this.itemsIngredients;
    ingredient.forEach((ingredient) => {
      this.listIngredients.prepend(item.appendChild(ingredient));
    });
  },
};

refs.insertIngredient(ingredients);
