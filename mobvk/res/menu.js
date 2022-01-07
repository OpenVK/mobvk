let menuBtn = document.querySelector('.navigation');
let menu = document.querySelector('.menuovk');
let content = document.querySelector('.main');

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
	content.classList.toggle('active');
})