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


var header_about = document.querySelector('#btn_about');
var header_contact = document.querySelector('#btn_contact');
var header_community = document.querySelector('#btn_community')
var invite_left = document.querySelector('.left')

var invite = document.querySelector('.invite');
var post1 = document = document.querySelector('.post1');
var trainers = document.querySelector ('.trainers')


var footer = document.querySelector('footer')
var footer_about_btn = document.querySelector('#footer_left_about_btn');
var footer_home_btn = document.querySelector('#footer_left_home_btn');
var footer_contact_btn = document.querySelector('#footer_left_contact_btn');
var footer_community = document.querySelector('#footer_left_community_btn');



var post2 = document.querySelector('.post2');
header_about.addEventListener('click', function(){
    scrollTo(post2);
})

header_contact.addEventListener('click', () => {
    scrollTo(invite)
    console.log('scrolled to invite')
});

header_community.addEventListener('click',()=>{
    scrollTo(invite_left)
    console.log('scrolled to community regPost')
})





footer_home_btn.addEventListener('click', () => {
    scrollTo(post1);
    console.log('scrolled from footer to about post')
})
footer_about_btn.addEventListener('click', () => {
    scrollTo(post2);
    console.log('scrolled from footer to post2')

})
footer_community.addEventListener('click', ()=>{
    scrollTo(invite_left)
    console.log('scrolled from footer to community post')
})
footer_contact_btn.addEventListener('click', () => {
    scrollTo(invite)
    console.log('scrolled from footer to invite')
})



let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})