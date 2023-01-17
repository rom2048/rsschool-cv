"use strict";
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        scrollY -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
    }

    e.preventDefault();
  }
}

const getSmena = () => {
  let arr = [];
  for (let i = 2; i <= 365; i++) {
    arr.push([i, i + 1]);
  }
  arr = arr.filter((_el, i) => !(i % 4));
  return arr.map((el, i) =>
    el.map((date) =>
      !(i % 2)
        ? new Date(2023, 0, date, 8).toLocaleDateString("ru-RU", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) + " ночь"
        : new Date(2023, 0, date, 20).toLocaleDateString("ru-RU", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
          }) + " день"
    )
  );
};

console.log(getSmena());
