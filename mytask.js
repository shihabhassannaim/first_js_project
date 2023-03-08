/*
title : my task application with vanilla javascript dom 
made by : MD. Shihab Hassan Naim
date : 07 - 03 -2023 
*/
//select elements ans assign that in variables 
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

let creatTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');
    
    label.innerText = task ;
    checkBox.type = 'checkbox';
     
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = creatTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    
    bindInCompleteItems(listItem , completeTask);
}

let completeTask = function(){
    let listItem = this.parentNode
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem , deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
let bindInCompleteItems = function(taskItem , checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick ;
}
let bindCompleteItems = function(taskItem , deleteButtonClick) {
    let deleteButton  = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick ;
}

for(let i = 0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}
for(let i = 0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

// for(let i=0; i< todoUl.children.length; i++ ) {
//     bindInCompleteItems(todoUl.children[i], completeTask);
// }

// for(let i=0; i< completeUl.children.length; i++ ) {
//     bindCompleteItems(completeUl.children[i], deleteTask);
// }
form.addEventListener('submit', addTask);


