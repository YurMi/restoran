import ibg from './ibg.js'; //Подключаю функцию ibj


const menu__burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
if (menu__burger) {
	menu__burger.addEventListener("click", function (e) {
		body.classList.toggle('lock');
		menu__burger.classList.toggle('active');
		menu.classList.toggle('active');
	})
}