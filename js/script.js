console.log("Hello world!");

const image = document.querySelector(".js-image");
const hidePhoto = document.querySelector(".js-hidePhotoButton");
const title = document.querySelector(".js-title");
const changeHeader = document.querySelector(".js-changeHeaderButton");
const hideShow = document.querySelector(".js-hideShow");

hidePhoto.addEventListener("click", () => {
  image.classList.toggle("hidden");
  hideShow.innerText = image.classList.contains("hidden") ? "SHOW" : "HIDE";
});

changeHeader.addEventListener("click", () => {
  title.classList.toggle("js-title");
  title.innerText = title.classList.contains("js-title")
    ? "Hello World!"
    : "Welcome to my site!";
});
