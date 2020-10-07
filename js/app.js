//const body = document.querySelector('body');
const store = document.querySelector('#store');
store.addEventListener('click', (event) => {
    event.preventDefault();
})
//const filterBtn = document.querySelector('#filter-btn');
//console.log(filterBtn.dataset.filter);

const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.dataset.filter === "all")
          console.log(button.dataset.filter);
        //if (button.classList.contains('filter-btn').dataset.filter.contains('all')) {
        //}
    })
})