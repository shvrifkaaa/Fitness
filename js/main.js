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
var footer_about_btn = document.querySelector('#footer_left_about_btn');
var footer_home_btn = document.querySelector('#footer_left_home_btn');
var header_about = document.querySelector('.btn_about');
var post2 = document.querySelector('.post2');
var header_contact = document.querySelector('.btn_contact');
var invite = document.querySelector('.invite');
var post1 = document = document.querySelector('.post1');
var footer_contact_btn = document.querySelector('#footer_left_contact_btn');
var burger_trainers = document.querySelector('.btn_trainers')
var trainers = document.querySelector ('.trainers')
var burger_invite = document.querySelector ('.btn_invite')
var burger_contact = document.querySelector('.btn_contact')
var footer = document.querySelector('footer')
burger_invite.addEventListener('click', () => {
    scrollTo(invite)
    console.log('scrolled to invite')
})
burger_contact.addEventListener('click', ()=> { 
    scrollTo(footer)
    console.log('scrolled to footer')
})

burger_trainers.addEventListener('click', () => { 
    scrollTo(trainers)
    console.log('scrolled to trainers')
})

header_about.addEventListener('click', () => {
    scrollTo(post2);
    console.log('scrolled to post2')
})
header_contact.addEventListener('click', () => {
    scrollTo(invite)
    console.log('scrolled to invite')
});
footer_home_btn.addEventListener('click', () => {
    scrollTo(post1);
    console.log('scrolled to post1')
})
footer_about_btn.addEventListener('click', () => {
    scrollTo(post2);
    console.log('scrolled to post2')
})
footer_contact_btn.addEventListener('click', () => {
    scrollTo(invite)
    console.log('scrolled to invite')
})
