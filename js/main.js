import ibg from './ibg.js'; //Подключаю функцию ibj
import select_custom from "./seleck.js";
import filter_custom from "./filter.js";
import scroll from "./scrollMenu.js";

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
//================================= swiper ================================================================================================================================

const swiper = new Swiper('.specialties__swiper', {
	// Optional parameters
	loop: true,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	spaceBetween: 20,
	speed: 800,
});