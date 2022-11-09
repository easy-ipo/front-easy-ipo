const menu_mobile_open = document.getElementById("menu-mobile-icon");
const menu_mobile_close = document.getElementById("menu-close-icon");
const menu_mobile = document.getElementById("menu-mobile");

// Exibindo o menu mobile após o carregamento da página
menu_mobile.style.display = "flex";

menu_mobile_open.addEventListener("click", function (){
    menu_mobile.classList.add("open");
});

menu_mobile_close.addEventListener("click", function (){
    menu_mobile.classList.remove("open");
});
