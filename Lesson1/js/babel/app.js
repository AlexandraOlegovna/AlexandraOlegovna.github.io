"use strict";

var $ = function $(s) {
    return document.querySelector(s);
};
var isOpen = false;

function open_close_menu(s) {
    var menu = $(".title_navbar");
    var icon = $(".show-menu");

    if (s === "open") {
        menu.style.left = "0";
        icon.style.left = "0";
        isOpen = true;
    } else if (s === "close") {
        menu.style.left = "-273px";
        icon.style.left = "-240px";
        isOpen = false;
    }
}

$("#hamburger").onclick = function (_) {
    return open_close_menu(isOpen ? "close" : "open");
};

$("#content").onclick = function (_) {
    return open_close_menu("close");
};

$(".title_navbar").onclick = function (_) {
    return open_close_menu("close");
};