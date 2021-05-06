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

  insertIngredient(ingredients) {
    ingredients.forEach((ingredient) => {
      const itemsIngredients = document.createElement("li");
      itemsIngredients.textContent = ingredient;
      this.listIngredients.append(itemsIngredients);
    });
  },
};

refs.insertIngredient(ingredients);
