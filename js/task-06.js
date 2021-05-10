const refs = {
  inputValidation: document.querySelector("#validation-input"),
};

refs.inputValidation.addEventListener("change", () => {
  if (refs.inputValidation.value.length > refs.inputValidation.dataset.length) {
    refs.inputValidation.classList.add("valid");
    refs.inputValidation.classList.remove("invalid");
  } else {
    refs.inputValidation.classList.add("invalid");
    refs.inputValidation.classList.remove("valid");
  }
});
