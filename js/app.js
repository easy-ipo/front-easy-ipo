// Carregando Header e Footer
window.addEventListener('load', function () {
    fetch('includes/header.html')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById("header-container").outerHTML = html;

            // Tirando Preloader
            document.getElementsByClassName("container")[0].style.display = "block";
            document.getElementById("preloader").remove();

            // Exibindo o menu mobile após o carregamento da página
            loadMenuMobile();
        });

    fetch('includes/footer.html')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            document.getElementById("footer-container").outerHTML = html;
        });
})


function loadMenuMobile() {

    const menu_mobile_open = document.getElementById("menu-mobile-icon");
    const menu_mobile_close = document.getElementById("menu-close-icon");
    const menu_mobile = document.getElementById("menu-mobile");

    menu_mobile.style.display = "flex";

    menu_mobile_open.addEventListener("click", function () {
        menu_mobile.classList.add("open");
    });

    menu_mobile_close.addEventListener("click", function () {
        menu_mobile.classList.remove("open");
    });
}