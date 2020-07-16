let header = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
