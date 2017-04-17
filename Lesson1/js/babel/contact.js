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
  var elems = Array.from($('.message_form').elements);
  var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
  xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 500) console.log('Check apikey');
    }
  };
  xmlhttp.send(JSON.stringify({ 'key': '6J3jaL1FFBaIxn370Zv_2Q',
    'message': {
      'from_email': elems[1].value,
      'to': [{ 'email': 'alexis-rostov@mail.ru', 'name': elems[0].value, 'type': 'to' }],
      'autotext': elems[3].value,
      'subject': elems[2].value,
      'html': ''
    } }));
  return validate();
};