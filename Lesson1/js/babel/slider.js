'use strict';

var $ = function $(s) {
  return document.querySelector(s);
};
var carousel = $('.title_header_carousel');
var listElems = carousel.querySelectorAll('li');
var countElem = listElems.length;
var position = 0;
var delay = 5000;
var timerId = void 0;

function showElem(index) {
  for (var i = 0; i < listElems.length; i++) {
    listElems[i].style.display = 'none';
    listElems[i].style.opacity = '0';
  }
  listElems[index].style.display = 'block';
  listElems[index].style.opacity = '1';
}

function prevNextSlide(type) {
  var x = 0;
  x = type === 'prev' ? -1 : type === 'next' ? 1 : 0;
  position = (position + countElem + x) % countElem;
  showElem(position);
}

function prevNextSlideWithDelay(type) {
  prevNextSlide(type);
  clearTimeout(timerId);
  carouselAuto();
}

var carouselAuto = function carouselAuto(_) {
  return timerId = setInterval(prevNextSlide, delay, 'next');
};

carouselAuto();

carousel.querySelector('.title_header_carousel_btn_prev').onclick = function (_) {
  return prevNextSlideWithDelay('prev');
};

carousel.querySelector('.title_header_carousel_btn_next').onclick = function (_) {
  return prevNextSlideWithDelay('next');
};