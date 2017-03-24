"use strict";

var $ = function $(s) {
    return document.querySelector(s);
};
var a = $("#hamburger");
var isOpen = false;

a.onclick = function (_) {
    var menu = $(".title_navbar");
    var icon = $(".show-menu");

    if (!isOpen) {
        menu.style.left = "0";
        icon.style.left = "0";
        // content.style.transform = "translate3d(273px, 0px, 0px)"
        isOpen = true;
    } else {
        menu.style.left = "-273px";
        icon.style.left = "-240px";
        // content.style.transform = "translate3d(0px, 0px, 0px)"
        isOpen = false;
    }
};

console.log([1, 2, 3].map(function (n) {
    return Math.pow(n, 2);
}));