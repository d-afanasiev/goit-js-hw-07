const refs = {
  inputName: document.querySelector("#name-input"),
  textChange: document.querySelector("#name-output"),
};

refs.inputName.addEventListener("input", () => {
  if (refs.inputName.value.trim() === "") {
    return (refs.textChange.textContent = "незнакомец");
  }
  refs.textChange.textContent = refs.inputName.value.trim();
});
