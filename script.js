let count = 1;

function updateDisplay (e){
    document.querySelector(".btn-paragraph").innerHTML = e;
}

function add() {
    if(count < 10)
    updateDisplay(++count)
}

function remove() {
    if(count > 1)
    updateDisplay(--count)
}
