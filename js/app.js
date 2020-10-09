const buttons = document.querySelectorAll('.filter-btn');
const store = document.querySelector('#store');

/* отменяет возврат на начало страницы, при переходе по ссылке */
store.addEventListener('click', (event) => {
    event.preventDefault();
})

/* сделать что-то регулярное - каждую секунду 1000ms */
let timeId = setTimeout(function tick() {
    /* some code */
    /* повторный запуск */
    timeId = setTimeout(tick, 1000); /* (*) */
}, 1000);

/* поиск сладостей по вводу в поиск */
document.addEventListener('keyup', () => {
    const storeItems = document.querySelectorAll('.store-item');
    const inputValue = document.querySelector('#search-item').value;
    
    findOfWordFrom(storeItems, inputValue);
})

function findOfWordFrom(array, byTarget) {
    array.forEach((item) => {
        let string = item.dataset.item;
        if (string.indexOf(byTarget) !== -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}

/* сортировка сладостей по кнопки выбора store */
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        /* запоминаем единственный селектор */
        const word = button.dataset.filter;
        sortByOne(word);
    })
})

function sortByOne(value) {
    /* запоминаем все карточки, которые либо появяться либо исчезнут */
    const storeItems = document.querySelectorAll('.store-item');
    /* показываем все или только определенный item */
    if (value === "all") {
        storeItems.forEach((item) => {
            item.style.display = "block";
        })
    } else {
        onDisplayVisible(storeItems, value);
    }
}

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