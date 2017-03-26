let $ = s => document.querySelector(s);
let isOpen = false;

function open_close_menu(s){
    let menu = $(".title_navbar");
    let icon = $(".show-menu");

    if (s === "open"){
        menu.style.left = "0";
        icon.style.left = "0";
        isOpen = true;
    }
    else if (s === "close")
    {
        menu.style.left = "-273px";
        icon.style.left = "-240px";
        isOpen = false;
    }
}


$("#hamburger").onclick = _ =>  open_close_menu( isOpen ? "close" : "open")

$("#content").onclick = _ =>  open_close_menu("close")

$(".title_navbar").onclick = _ => open_close_menu("close")
