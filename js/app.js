const buttons = document.querySelectorAll('.filter-btn');
const store = document.querySelector('#store');

/* отменяет возврат на начало страницы, при переходе по ссылке */
store.addEventListener('click', (event) => {
    event.preventDefault();
})

/* поиск сладостей по вводу в поиск */
const search = document.querySelector('#search-item');

/* сделать что-то регулярное - каждую секунду 1000ms */
let timeId = setTimeout(function tick() {
    //console.log(search.value);
    /* повторный запуск */
    timeId = setTimeout(tick, 1000); /* (*) */
}, 1000);

/* search by letter with equal the main word */
function findSimilarWords(byTarget, fromAnArray) {
    //const length = value.length - 1;
    let count = 0;
    let arrayWords = [];

    fromAnArray.forEach((onePosFromArray) => {
        let word = onePosFromArray.dataset.filter;
        //let byTarget = value;
        let pos = 0;
        
        let foundPos = word.indexOf(byTarget, pos);
        //console.log(`${str} -> ${foundPos}`);
        if ( word.indexOf(byTarget) !== -1 ) {
            //console.log(word);
            /* count количество найденных слов */
            count++;
            //sortByWord(word);
            //console.log(count);
            arrayWords.push(word);
        }
        /*if (candy === value) {
            console.log(`выбор -> ${button.dataset.filter}`);
            word(button.dataset.filter);
        }*/
        //console.log(`filter ${candy}, sreach-item ${value}`);
    })

    //console.log(arrayWords.length);
    if ( arrayWords.length > 0 ) {
        sortByWord(arrayWords);
    }
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
    findSimilarWords(search.value, buttons);
    //console.log(returnLetter('cake', 2));
    /*buttons.forEach((button) => {
        equal(search.value, button.dataset.filter);
    })*/
})

/* сортировка сладостей по кнопки выбора store */
buttons.forEach((button) => {


    //let allCandy = button.dataset.filter;

    button.addEventListener('click', () => {
        /* запоминаем единственный селектор */
        const word = button.dataset.filter;
        sortByWord(word);
        /* при нажатие сортируются item-ы */
        /*if (wordCandy === "all") {
            storeItems.forEach((item) => {
                item.style.display = "block";
            })
        } else {
            onDisplayVisible(storeItems, wordCandy);
        }*/
    })
})

function sortByWord(value) {
    /* запоминаем единственный селектор */
    //const wordCandy = button.dataset.filter;
    const storeItems = document.querySelectorAll('.store-item');
    /*if (Array.isArray(value)) {
        console.log("is array");
    }*/
    /* при нажатие сортируются item-ы */
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