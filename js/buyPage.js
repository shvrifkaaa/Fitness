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