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

  result = result && !(elems[1].match(/.+@.+/g) === null)
  return result
}

$('.message_form').onsubmit = function () {
  return validate()
}
