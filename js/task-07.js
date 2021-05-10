const refs = {
  inputRange: document.querySelector("#font-size-control"),
  textChange: document.querySelector("#text"),
};

refs.inputRange.addEventListener("input", () => {
  refs.textChange.style.fontSize = `${refs.inputRange.value}px`;
});
