

function scrollMenu() {
    const headerMenu = document.querySelector('.header');
    let last_known_scroll_position = 0;
    let ticking = false;

    function doSomething(scroll_pos) {

        // Делаем что-нибудь с позицией скролла
        if (last_known_scroll_position > 20) {
            headerMenu.classList.add('scroll__menu');
        } else if (last_known_scroll_position < 20) {
            headerMenu.classList.remove('scroll__menu');
        }
    }

    window.addEventListener('scroll', function (e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function () {
                doSomething(last_known_scroll_position);
                ticking = false;
            });

            ticking = true;
        }
    });

}

scrollMenu();

export default scrollMenu;
