const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector("sub-btn");
submitButton.addEventListener("click", () => {
  thanksContainer.style.display = "flex";
  mainContainer.style.display = "none";
});
