let todo_list = document.querySelector('.todo-list');
let form = document.querySelector('form');
let type_todo = document.getElementById('type-todo');
let items_left = document.querySelector('.items-left');
let check_Img = document.querySelector('.check');
let selection = document.querySelector('.selection');
let container = document.querySelector('.container');
let theme_image = document.getElementById('theme-image');
let body = document.querySelector('body');
let todo_fill = document.querySelector('.todo-fill');
let text = document.querySelector('.text');
let close = document.querySelector('.close')

function toggleTheme(){
    
    if(theme_image.getAttribute('src') == './Images/icon-sun.svg'){
        theme_image.setAttribute('src','./Images/icon-moon.svg')
        container.style.background = `url('./Images/bg-desktop-light.jpg') no-repeat center / cover`
    }
    else{
        theme_image.setAttribute('src','./Images/icon-sun.svg')
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
    <div class="check"><img src="./Images/icon-check.svg" alt=""></div>
    <p>${textVal}</p>
    </div>
    <img class="close" src="./Images/icon-cross.svg" alt="">
    </div>`
    text.appendChild(addDiv);
}

function countItems(){
    let items =  text.childElementCount;
    // console.log(items)
    if(items > 1){
        items_left.textContent = `${items} tasks left`
    }
    else if (items == 1){
        items_left.textContent = `${items} task left`
    }
    else{
        items_left.textContent = "no tasks added"
    }
}

theme_image.addEventListener('click',toggleTheme)
function check(){
    let check_Icon = document.querySelector('.check-icon');
    check_Icon.style.display = "block";
    check_Img.style.background ="linear-gradient(129deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
    check_Img.style.border = 'none';
}
function removeItems(e){
    e.remove();
}
text.addEventListener('click', (e) => {
    console.log(e)
    if(e.target.classList.contains('close')){
        removeItems(e.path[2]);
    }
    countItems();
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(type_todo.value !== ''){
        appendToList();
    }
    countItems();
    type_todo.value = "";
})

