const refs = {
  listItems: document.querySelectorAll("li.item"),

  getCategories() {
    console.log(`В списке ${this.listItems.length} категории.`);
  },

  getListCategories() {
    this.listItems.forEach((element) => {
      console.log(`Категория: ${element.firstElementChild.textContent}`);
      console.log(
        `Количество элементов: ${element.lastElementChild.children.length}`
      );
    });
  },
};

refs.getCategories();
refs.getListCategories();
