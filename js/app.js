//const body = document.querySelector('body');
const store = document.querySelector('#store');
store.addEventListener('click', (event) => {
    event.preventDefault();
})
//const filterBtn = document.querySelector('#filter-btn');
//console.log(filterBtn.dataset.filter);

const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        const storeItems = document.querySelectorAll('.store-item');
        if (button.dataset.filter === "all") {
            //console.log(button.dataset.filter);

            storeItems.forEach((storeItem) => {
                storeItem.style.display = "block";
            })
        } else if (button.dataset.filter == "cakes") {

            storeItems.forEach((storeItem) => {
                if (storeItem.classList.contains("cakes")) {
                    storeItem.style.display = "block";
                } else {
                    storeItem.style.display = "none";
                }
            })
        }

        //if (button.classList.contains('filter-btn').dataset.filter.contains('all')) {
        //}
    })
})