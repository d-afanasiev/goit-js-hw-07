const refs = {
  containerControls: document.querySelector("#controls"),
  containerBoxes: document.querySelector("#boxes"),
  widthBox: 30,
  heightBox: 30,

  getRandomColor(min, max) {
    return Math.random() * (max - min) + min;
  },

  createBoxes(amount) {
    const arrContent = [];
    for (let i = 0; i < amount; i++) {
      const boxColor = document.createElement("div");
      boxColor.style.width = `${this.widthBox}px`;
      boxColor.style.height = `${this.heightBox}px`;
      boxColor.style.margin = "5px";
      boxColor.style.backgroundColor = `rgb(${this.getRandomColor(
        0,
        255
      )}, ${this.getRandomColor(0, 255)}, ${this.getRandomColor(0, 255)})`;
      arrContent.push(boxColor);
      this.widthBox += 10;
      this.heightBox += 10;
    }
    this.containerBoxes.append(...arrContent);
  },

  destroyBoxes() {
    this.containerBoxes.innerHTML = "";
    this.widthBox = 30;
    this.heightBox = 30;
    this.containerControls.firstElementChild.value = "";
  },
};

refs.containerControls.addEventListener("click", (event) => {
  if (event.target.dataset.action === "render") {
    refs.createBoxes(refs.containerControls.firstElementChild.value);
  } else if (event.target.dataset.action === "destroy") {
    refs.destroyBoxes();
  }
});
