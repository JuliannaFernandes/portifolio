const checkbox = document.getElementById("check");
const navbar = document.querySelector(".navbar");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    navbar.style.height = "17.7rem";
  } else {
    navbar.style.height = 0;
  }
});
