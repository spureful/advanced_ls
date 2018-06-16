const sliderContent = [
  {
    title: "Сайт Авиакомпании AirPlanet",
    image: "../assets/images/works/work_1.png",
    tags: ["html ", "css"],
    link: "https://spureful.github.io/project_ls_1/"
  },

  {
    title: "Лендинг магазина бургеров",
    image: "../assets/images/works/work_2.png",
    tags: ["html ", "css ", "js ", "gulp"],
    link: "https://spureful.github.io/project_burgers/build/"
  },

  {
    title: "сайт-портфолио",
    image: "../assets/images/works/work_3.png",
    tags: ["html ", "css ", "js ", "gulp ", "webpack"],
    link: "https://spureful.github.io/advanced_ls/dist/"
  }
];

const slider = document.querySelector(".js-slider");
const mainSlide = document.querySelector(".js-mainslide ");
const slideUp = document.querySelector(".js-slide-up");
const slideDown = document.querySelector(".js-slide-down");
const slideBtnDown = document.querySelector(".js-slide-btndown");
const slideBtnUp = document.querySelector(".js-slide-btnup");
const slideSiteName = document.querySelector(".js-slider-sitename");
const slideTags = document.querySelector(".js-slider-tags");
const slideLink = document.querySelector(".js-slider-link");
const sliderLength = sliderContent.length;
let currentSlide = 0;
let i = 0;
let l = 0;

function sliderCount(value) {
  if (value >= sliderLength) {
    return 0;
  } else if (value < 0) {
    return sliderLength - 1;
  } else {
    return value;
  }
}

function fillSlider() {
  let prev = sliderCount(currentSlide - 1);
  let next = sliderCount(currentSlide + 1);

  mainSlide.src = sliderContent[currentSlide].image;
  slideUp.setAttribute("src", sliderContent[prev].image);
  slideDown.setAttribute("src", sliderContent[next].image);
  slideSiteName.innerText = sliderContent[currentSlide].title;
  slideTags.innerText = sliderContent[currentSlide].tags;
  slideLink.setAttribute("href", sliderContent[currentSlide].link);
}

slideBtnUp.addEventListener("click", function() {
  currentSlide = sliderCount(currentSlide - 1);
  fillSlider();
  setTimeout(function foo() {
    const stu = slideBtnUp.offsetHeight;
    if (l < stu) {
      slideUp.style.height = l + "px";
      l += 10;
    }
    setTimeout(foo, 30);
  }, 30);
  l = 0;
});

slideBtnDown.addEventListener("click", function() {
  currentSlide = sliderCount(currentSlide + 1);
  fillSlider();

  setTimeout(function foo() {
    const std = slideBtnDown.offsetHeight;
    if (i < std) {
      slideDown.style.height = i + "px";
      i += 10;
    }
    setTimeout(foo, 30);
  }, 30);
  i = 0;
});

fillSlider();
