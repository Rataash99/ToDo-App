let todo_list = document.querySelector('.todo-list');
let form = document.querySelector('form');
let type_todo = document.getElementById('type-todo');
let items_left = document.querySelector('.items-left');
let selection = document.querySelector('.selection');
let container = document.querySelector('.container');
let theme_image = document.getElementById('theme-image');
let body = document.querySelector('body');
let todo_fill = document.querySelector('.todo-fill');
let text = document.querySelector('.text');
let close = document.querySelector('.close')
let check_Icon = document.querySelector('.check-icon');
let check_Img = document.querySelector('.check');
let active = document.getElementsByClassName('active')[0];

function appendToList() {
    let textVal = type_todo.value;
    let addDiv = document.createElement('div');
    addDiv.className = "main-class"
    addDiv.innerHTML = `
    <div class="todo-list">
    <div class = checkNPara>
    <div class="check"><img class = "check-icon" src="./Images/icon-check.svg" alt=""></div>
    <p>${textVal}</p>
    </div>
    <img class="close" src="./Images/icon-cross.svg" alt="">
    </div>`
    text.appendChild(addDiv);
}
function show_active() {
    let active_task = (text.getElementsByClassName('checkNPara'))
    let active_arr = Array.from(active_task);
    active_arr.forEach(element => {
        if (element.children[0].classList.contains('active-check')) {
            element.parentElement.parentElement.classList.toggle('display-active')
        }
        if (!element.children[0].classList.contains('active-check')) {
            element.parentElement.parentElement.classList.remove('display-completed')
        }
    })
}
function show_completed() {
    let completed_task = text.getElementsByClassName('checkNPara')
    let completed_arr = Array.from(completed_task)
    completed_arr.forEach(element => {
        if (!element.children[0].classList.contains('active-check')) {
            element.parentElement.parentElement.classList.toggle('display-completed')
        }
        if (element.children[0].classList.contains('active-check')) {
            element.parentElement.parentElement.classList.remove('display-active')
        }
    })
}
function clear_completed() {
    let clear_completed_task = text.getElementsByClassName('checkNPara')
    let clear_completed_arr = Array.from(clear_completed_task)
    clear_completed_arr.forEach(element => {
        if (element.children[0].classList.contains('active-check')) {
            element.parentElement.parentElement.remove();
        }
    })
}
function show_all() {
    let all_task = text.getElementsByClassName('checkNPara')
    let show_all_arr = Array.from(all_task)
    show_all_arr.forEach(element => {
        if (!element.children[0].classList.contains('active-check')) {
            element.parentElement.parentElement.classList.remove('display-completed')
        }
        if (element.children[0].classList.contains('active-check')) {
            element.parentElement.parentElement.classList.remove('display-active')
        }
    })
}
selection.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
        show_active()
    }
    if (e.target.classList.contains('completed')) {
        show_completed()
    }
    if (e.target.classList.contains('clear-completed')) {
        clear_completed()
    }
    if (e.target.classList.contains('all')) {
        show_all();
    }
})

function toggleTheme() {
    if (theme_image.getAttribute('src') == './Images/icon-sun.svg') {
        theme_image.setAttribute('src', './Images/icon-moon.svg')
        container.style.background = `url('./Images/bg-desktop-light.jpg') no-repeat center / cover`
    }
    else {
        theme_image.setAttribute('src', './Images/icon-sun.svg')
        container.style.background = `url('./Images/bg-desktop-dark.jpg') no-repeat center / cover`
    }
    selection.classList.toggle('theme-for-selection');
    items_left.classList.toggle('theme-selection-first-p');
    body.classList.toggle('body-bg');
    type_todo.classList.toggle('input-light-theme');
    text.classList.toggle("todo-list-bg");
}
function appendToList() {
    let textVal = type_todo.value;
    let addDiv = document.createElement('div');
    addDiv.className = "main-class"
    addDiv.innerHTML = `
    <div class="todo-list">
    <div class = checkNPara>
    <div class="check"><img class = "check-icon" src="./Images/icon-check.svg" alt=""></div>
    <p>${textVal}</p>
    </div>
    <img class="close" src="./Images/icon-cross.svg" alt="">
    </div>`
    text.appendChild(addDiv);
}

function countItems() {
    let checked_length = document.getElementsByClassName('check-icon-style').length
    let total_length = document.getElementsByClassName("main-class").length;
    let length = total_length - checked_length;
    if (length == 0) {
        items_left.textContent = "No Tasks Added"
    }
    if (length > 1) {
        items_left.textContent = `${length} Tasks Left`
    }
    else if (length == 1) {
        items_left.textContent = `${length} Task Left`
    }
    else if (checked_length == total_length && checked_length !== 0) {
        items_left.textContent = "All Tasks Completed"
    }
}
function check(e) {
    if (e.target.classList.contains('check-icon')) {
        e.path[1].classList.toggle('active-check');
        e.path[1].lastElementChild.classList.toggle('check-icon-style');
        e.path[2].lastElementChild.classList.toggle('line-thru')
    }
    else {
        e.path[0].lastElementChild.classList.toggle('check-icon-style');
        e.path[0].classList.toggle('active-check');
        e.path[1].lastElementChild.classList.toggle('line-thru')
    }
}
function removeItems(e) {
    e.remove();
}

theme_image.addEventListener('click', toggleTheme)

text.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) {
        removeItems(e.path[2]);
    }
    if (e.target.classList.contains('check-icon') || (e.target.classList.contains('check'))) {
        check(e)
    }
    countItems();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type_todo.value !== '') {
        appendToList();
    }
    countItems();
    type_todo.value = "";
})

