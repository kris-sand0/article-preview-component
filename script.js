const shareButton = document.querySelector(".share-button");
const shareMenu = document.querySelector(".share-menu");
const cardFooter = document.querySelector(".card__footer");

shareButton.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    cardFooter.classList.toggle("active");
  } else {
    shareMenu.classList.toggle("active");
    shareButton.classList.toggle("active");
  }
});