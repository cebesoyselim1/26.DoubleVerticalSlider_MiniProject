const sliderLeft = document.querySelector(".slider-left");
const sliderRight = document.querySelector(".slider-right");
const btnUp = document.querySelector(".slider-up");
const btnDown = document.querySelector(".slider-down");

const sliderCount = document.querySelectorAll(".slider-content").length;
let currentSlider = 0;

btnUp.addEventListener("click",sliderUp);
btnDown.addEventListener("click",sliderDown);

function sliderUp(){
    currentSlider ++;
    if(sliderCount == currentSlider){ currentSlider = 0}
    sliderLeft.style.transform = `translateY(${100 * currentSlider - 300}%)`;
    sliderRight.style.transform = `translateY(${-100 * currentSlider}%)`;
}

function sliderDown(){
    currentSlider --;
    if(currentSlider == -1){ currentSlider = sliderCount - 1}
    sliderLeft.style.transform = `translateY(${100 * currentSlider - 300}%)`;
    sliderRight.style.transform = `translateY(${-100 * currentSlider}%)`;
}