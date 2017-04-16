'use strict'

let $ = s => document.querySelector(s)

$('#contact-form').onclick = _ => $('.layout').style.display = 'flex'

$('#close').onclick = _ => $('.layout').style.display = 'none'

function showError (container) {
  container.classList.add('error-input')
}

function resetError (container) {
  container.classList.remove('error-input')
}

function validate () {
  let elems = Array.from($('.message_form').elements)
  let result = true
  elems.forEach((elem) => {
    resetError(elem)
    if (!elem.value) {
      showError(elem)
      result = result && false
    }
  })

  if (!elems[1].value.match(/.+@.+/g)) {
    showError(elems[1])
    result = result && false
  }
  return result
}

$('.message_form').onsubmit = function () {
  return validate()
}

let inputs = document.getElementsByTagName('input')
Array.from(inputs).forEach((elem) => {
  elem.addEventListener('input', () => resetError(elem))
})
