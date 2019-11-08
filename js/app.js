
/*----- app's state (variables) -----*/
let counter;
/*----- cached element references -----*/
let addButton = document.querySelector('div :first-child');
let subtractbutton = document.querySelector('div :last-child');
let inputBar = document.querySelector('input');
/*----- event listeners -----*/
addButton.addEventListener('click', adder);
subtractbutton.addEventListener('click', subtractor);

/*----- functions -----*/

function init() {
    counter = 0;
    render();
}

init();

function render() {
    document.querySelector('h1').textContent = counter;
    if (counter < 0) document.querySelector('h1').style.color = 'red';
}
function adder() {
    if (isNaN(inputBar.value)) return;
    counter = +inputBar.value;
    render()

}

function subtractor() {
    if (isNaN(inputBar.value)) return;
    counter = +inputBar.value;
    render()
}

