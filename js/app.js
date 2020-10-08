const buttons = document.querySelectorAll('.filter-btn');
const store = document.querySelector('#store');

/* отменяет возврат на начало страницы, при переходе по ссылке */
store.addEventListener('click', (event) => {
    event.preventDefault();
})

/* поиск сладостей по вводу в поиск */
const search = document.querySelector('#search-item');

let timeId = setTimeout(function tick() {
    //console.log(search.value);
    /* повторный запуск */
    timeId = setTimeout(tick, 1000); /* (*) */
}, 1000);


function word(value) {
    //const length = value.length - 1;
    //const index = 0;

    buttons.forEach((button) => {
        let str = button.dataset.filter;
        let target = value;
        let pos = 0;
        
        let foundPos = str.indexOf(target, pos);
        console.log(`${str} -> ${foundPos}`);

        /*if (candy === value) {
            console.log(`выбор -> ${button.dataset.filter}`);
            word(button.dataset.filter);
        }*/
        //console.log(`filter ${candy}, sreach-item ${value}`);
    })
}

/* сравнить пару слов */
function equal(input, word) {
    const length = input.length - 1;
    if (input === word[length]) {
        //equal()
    }
}

/* вернуть буквы которые были введены в поиск */
function returnLetter(letter, length) {
    if (length >= 0)
        return letter[0] + returnLetter(letter, length - 1);
    else
        return '';
}

/* нажатие кнопки */
document.addEventListener('keyup', () => {
    word(search.value);
    //console.log(returnLetter('cake', 2));
    /*buttons.forEach((button) => {
        equal(search.value, button.dataset.filter);
    })*/
})

/* сортировка сладостей по кнопки выбора store */
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