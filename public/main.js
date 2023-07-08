let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("fa-times");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  menu.classList.remove("fa-times");
};
