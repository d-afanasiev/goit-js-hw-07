const refs = {
  containerCounter: document.querySelector("#counter"),
  value: document.querySelector("#value"),
  counterValue: 0,

  increment() {
    this.counterValue += 1;
    this.value.textContent = this.counterValue;
  },

  decrement() {
    this.counterValue -= 1;
    this.value.textContent = this.counterValue;
  },
};

refs.containerCounter.addEventListener("click", (event) => {
  if (event.target.dataset.action === "decrement") {
    refs.decrement();
  } else if (event.target.dataset.action === "increment") {
    refs.increment();
  }
});
