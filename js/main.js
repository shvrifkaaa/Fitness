function scrollTo(element){
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
var invite = document.querySelector('#invite');

header_contact.addEventListener('click', () =>{
    scrollTo(invite)
    console.log('dfhjd')
})










// var $end = document.querySelector('#text3');

// $.waypoint(function () {
//     console.log('hello world');
// })