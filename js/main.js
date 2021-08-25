
const meny__burger = document.querySelector('.meny__burger');
const menu = document.querySelector('.meny');
const body = document.querySelector('body')
if (meny__burger) {
	meny__burger.addEventListener("click", function (e) {
		body.classList.toggle('lock');
		meny__burger.classList.toggle('active');
		menu.classList.toggle('active');
	})
}