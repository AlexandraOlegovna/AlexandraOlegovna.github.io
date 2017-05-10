// 'use strict'
//
// let $ = s => document.querySelector(s)
// let carousel = $('.title_header_carousel')
// let listElems = carousel.querySelectorAll('li')
// let countElem = listElems.length
// let position = 0
// let delay = 5000
// let timerId
//
// function showElem (index) {
//   for (var i = 0; i < listElems.length; i++) {
//     listElems[i].style.display = 'none'
//     listElems[i].style.opacity = '0'
//   }
//   listElems[index].style.display = 'block'
//   listElems[index].style.opacity = '1'
// }
//
// function prevNextSlide (type) {
//   var x = 0
//   x = (type === 'prev' ? -1 : (type === 'next' ? 1 : 0))
//   position = (position + countElem + x) % countElem
//   showElem(position)
// }
//
// function prevNextSlideWithDelay (type) {
//   prevNextSlide(type)
//   clearTimeout(timerId)
//   carouselAuto()
// }
//
// let carouselAuto = _ => timerId = setInterval(prevNextSlide, delay, 'next')
//
// carouselAuto()
//
// carousel.querySelector('.title_header_carousel_btn_prev')
//     .onclick = _ => prevNextSlideWithDelay('prev')
//
// carousel.querySelector('.title_header_carousel_btn_next')
//     .onclick = _ => prevNextSlideWithDelay('next')
"use strict";