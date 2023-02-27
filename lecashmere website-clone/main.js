const backToTop = document.getElementById("backToTop");

const checkScroll = () => {
  let pageYOffset = window.pageYOffset;

  if (pageYOffset > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
};

const moveBackToTop = () => {
  if (window.pageYOffset > 300) {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }
};

backToTop.addEventListener("click", moveBackToTop);
window.addEventListener("scroll", checkScroll);
