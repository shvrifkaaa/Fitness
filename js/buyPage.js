$(document).ready(function () { // Ждём загрузки страницы // АНИМАЦИЯ ЦВЕТА ШАПКИ
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            anim();
        }
    });
});

function anim() {
    $('#header').css(anim_style);
}
var anim_style = {
    "background-color": "rgb(181,175,239)",
    "transition": "0.5s",
    "box-shadow": "0 0 20px 0 rgba(115,98,223,1)"
} // АНИМАЦИЯ ЦВЕТА ШАПКИ ПРИ СКРОЛЛЕ

function scrollTo(element) { // ПЛАВНЫЙ СКРОЛЛ ДО ЭЛЕМЕНТОВ ПРИ НАЖАТИИ
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
var btn_end = document.querySelector ('#btn_end')
var join_btn = document.querySelector('#btn_scroll').addEventListener('click', () => {
    scrollTo(btn_end);
})