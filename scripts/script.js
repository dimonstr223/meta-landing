"use strict";

//functionality of mlr section tabs
const tabs = document.querySelectorAll(".mrl__list-item");
const tabBox = document.querySelector(".mrl__list");
const contents = document.querySelectorAll(".mrl__box");

tabBox.addEventListener("click", (e) => {
  const clickedTab = e.target.closest(".mrl__list-item");
  if (!clickedTab) return;

  tabs.forEach((tab) => tab.classList.remove("mrl__list-item--active"));
  clickedTab.classList.add("mrl__list-item--active");

  contents.forEach((content) => content.classList.remove("mrl__box--active"));

  document
    .querySelector(`.mrl__box--${clickedTab.dataset.tab}`)
    .classList.add("mrl__box--active");
});

// smooth scroll
const ancors = document.querySelectorAll("a[href*='#']");

ancors.forEach((ancor) => {
  ancor.addEventListener("click", function (e) {
    e.preventDefault();
    const ancorId = ancor.hash;
    document.querySelector(ancorId).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});
