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

  result = result && !(elems[1].match(/.+@.+/g) === null);
  return result;
}

$('.message_form').onsubmit = function () {
  return validate();
};