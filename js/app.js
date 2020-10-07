const buttons = document.querySelectorAll('.filter-btn');
const store = document.querySelector('#store');

/* отменяет возврат на начало страницы, при переходе по ссылке */
store.addEventListener('click', (event) => {
    event.preventDefault();
})

// let count = 0;

buttons.forEach((button) => {

    const storeItems = document.querySelectorAll('.store-item');
    //let allCandy = button.dataset.filter;

    button.addEventListener('click', () => {
        /* запоминаем единственный селектор */
        const wordCandy = button.dataset.filter;

        /* при нажатие сортируются item-ы */
        if (wordCandy === "all") {
            storeItems.forEach((item) => {
                item.style.display = "block";
            })
        } else {
            onDisplayVisible(storeItems, wordCandy);
        }
    })
})

/**
 * 
 * @param {any} items массив селекторов, где есть
 * @param {any} showIt нужный ключевой Вам селектор
 */
function onDisplayVisible(items, showIt) {
    items.forEach((item) => {
        if (item.classList.contains(showIt)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}