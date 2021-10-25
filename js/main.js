function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

var header_about = document.querySelector('#btn_about');
var post2 = document.querySelector('.post2')

header_about.addEventListener('click', () => {
    scrollTo(post2);
})

// var end = document.querySelector('#text3');

// end.waypoint(function () {
//     console.log('hello world');
// })