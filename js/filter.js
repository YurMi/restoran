const filterMenu = document.querySelector('.filter__menu');
const restoranProduct = document.querySelectorAll('.restoran_product');
const filterBtn = document.querySelectorAll('.filter__btn');


function filterCustom() {
    filterMenu.addEventListener('click', e => {
        const targetId = e.target.dataset.id;
        const target = e.target

        if (target.classList.contains('filter__btn')) {
            filterBtn.forEach(filterBtn => filterBtn.classList.remove('.active'));
            target.classList.add('.active');
        }
        filterBtn.forEach(listItem => listItem.classList.remove('active'))
        switch (targetId) {
            case 'soup':
                getItems(targetId)
                break
            case 'pizza':
                getItems(targetId)
                break
            case 'pasta':
                getItems(targetId)
                break
            case 'desert':
                getItems(targetId)
                break
            case 'wine':
                getItems(targetId)
                break
            case 'beer':
                getItems(targetId)
                break
            case 'drinks':
                getItems(targetId)
                break
        }
    })
}
filterCustom();

function getItems(className) {
    restoranProduct.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

//имитация клика 
filterBtn[0].click();


export default filterCustom;