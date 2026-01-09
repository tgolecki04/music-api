  const btn = document.getElementById("scrollTopBtn");

  // pokaż przycisk po scrollu
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // scroll do góry po kliknięciu
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

const primary_btn = document.getElementById("primary-btn");
const target = document.getElementById("my-music");
const navHeight = document.querySelector("nav").offsetHeight;

 primary_btn.addEventListener("click", () => {
    window.scrollTo({
        top: target.offsetTop - navHeight,
        behavior: "smooth"
    });
  });