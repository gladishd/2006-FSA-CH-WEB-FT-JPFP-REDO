setTimeout(console.log('waiting for page to load...'), 1000)

let header = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function () {
  header = document.getElementsByTagName("nav")[0];
  const scrollPosition = window.scrollY;
  if (scrollPosition > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
