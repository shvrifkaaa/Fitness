let regPage = document.querySelector('.regPage');
let btn = document.querySelector('button').addEventListener('click',()=>{
		regPage.style.display="block"
        regPage.style.background="purple"

})
let exit = document.querySelector('span').addEventListener('click', () =>{
	regPage.style.display="none"
})