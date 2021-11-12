$(document).ready(function () { // Ждём загрузки страницы // АНИМАЦИЯ ЦВЕТА ШАПКИ
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            anim();
            console.log('hello')
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
}                                               // АНИМАЦИЯ ЦВЕТА ШАПКИ ПРИ СКРОЛЛЕ




function scrollTo(element){             // ПЛАВНЫЙ СКРОЛЛ ДО ЭЛЕМЕНТОВ ПРИ НАЖАТИИ
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var header_about = document.querySelector('#btn_about');
var post2 = document.querySelector('.post2');
header_about.addEventListener('click', () => {
    scrollTo(post2);
    console.log('df')
})

var header_contact = document.querySelector('#btn_contact');
var invite = document.querySelector('.invite');

header_contact.addEventListener('click', () =>{
    scrollTo(invite)
    console.log('dfhjd')
});