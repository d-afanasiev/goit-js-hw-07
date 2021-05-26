const refs = {
  inputValidation: document.querySelector("#validation-input"),
};

refs.inputValidation.addEventListener("blur", () => {
  if (
    refs.inputValidation.value.length ===
    parseInt(refs.inputValidation.dataset.length, 10)
  ) {
    refs.inputValidation.classList.add("valid");
    refs.inputValidation.classList.remove("invalid");
  } else {
    refs.inputValidation.classList.add("invalid");
    refs.inputValidation.classList.remove("valid");
  }
});
