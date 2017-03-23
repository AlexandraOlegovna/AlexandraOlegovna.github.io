"use strict";

var $ = function $(s) {
    return document.querySelector(s);
};
var a = $("#hamburger");
var isOpen = false;
var content = $(".all_content");

a.onclick = function (_) {
    var menu = $(".title_navbar");

    if (!isOpen) {
        menu.style.display = "block";
        // content.style.transform = "translate3d(273px, 0px, 0px)"
        isOpen = true;
    } else {
        menu.style.display = "";
        // content.style.transform = "translate3d(0px, 0px, 0px)"
        isOpen = false;
    }
};

console.log([1, 2, 3].map(function (n) {
    return Math.pow(n, 2);
}));