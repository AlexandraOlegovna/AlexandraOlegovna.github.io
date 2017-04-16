'use strict';

var $ = function $(s) {
  return document.querySelector(s);
};

$('#contact-form').onclick = function (_) {
  return $('.layout').style.display = 'flex';
};

$('#close').onclick = function (_) {
  return $('.layout').style.display = 'none';
};

function showError(container) {
  container.classList.add('error-input');
}

function resetError(container) {
  container.classList.remove('error-input');
}

function validate() {
  var elems = Array.from($('.message_form').elements);
  var result = true;
  elems.forEach(function (elem) {
    resetError(elem);
    if (!elem.value) {
      showError(elem);
      result = result && false;
    }
  });

  if (!elems[1].value.match(/.+@.+/g)) {
    showError(elems[1]);
    result = result && false;
  }
  return result;
}

$('.message_form').onsubmit = function () {
  return validate();
};

var inputs = document.getElementsByTagName('input');
Array.from(inputs).forEach(function (elem) {
  elem.addEventListener('input', function () {
    return resetError(elem);
  });
});