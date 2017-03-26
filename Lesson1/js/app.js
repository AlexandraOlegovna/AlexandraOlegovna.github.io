'use strict'

let $ = s => document.querySelector(s)
let isOpen = false

function openCloseMenu (s) {
  let menu = $('.title_navbar')
  let icon = $('.show-menu')

  if (s === 'open') {
    menu.style.left = '0'
    icon.style.left = '0'
    isOpen = true
  } else if (s === 'close') {
    menu.style.left = '-273px'
    icon.style.left = '-240px'
    isOpen = false
  }
}

$('#hamburger').onclick = _ => openCloseMenu(isOpen ? 'close' : 'open')

$('#content').onclick = _ => openCloseMenu('close')

$('.title_navbar').onclick = _ => openCloseMenu('close')
