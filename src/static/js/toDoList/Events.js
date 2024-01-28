import {Task, Task as task} from "./Task.js";

let tasks = document.querySelector("ul");


function submitForm(e){
    const form = e.currentTarget
    const data = new FormData(form)
    let title = data.get("title")
    if (title.length < 1) {
        console.log("no title")
        alert("no title : please insert a title ! ")
        e.preventDefault()
    }else{
        let new_task = new task(title, false)
        let task_element = new_task.createTaskElement(new_task)
        task_element.querySelector(".btn-danger").addEventListener("click", OnClickedRubbishButton)
        tasks.append(task_element)
        e.preventDefault()
    }
}
function OnClickedRubbishButton(e){
    console.log(e.currentTarget)
    let task = e.currentTarget.parentNode;
    console.log(task)
    task.remove()
}

function OnClickedTodoButton(e){
    filterByTodo()
    toggleButtonsStatus(e.currentTarget)
}

function OnClickedDoneButton(e){
    filterByDone()
    toggleButtonsStatus(e.currentTarget)
}
function OnClickedAllButton(e){
    filterByNone()
    toggleButtonsStatus(e.currentTarget)
}
function OnClickedCheckbox(e){
    let task = e.currentTarget.parentNode;
    if (e.currentTarget.checked){
        task.classList.add("is-completed")
    }else{
        task.classList.remove("is-completed")
    }
}
function filterByTodo(){
    let tasks_array = Array.from(document.querySelector("ul").querySelectorAll("li"))
    tasks_array.forEach(element => {
        if (element.querySelector("input").checked){
            element.classList.add("hide-completed")
        }else{
            element.classList.remove("hide-todo")
        }
    });
}
function filterByDone(){
    let tasks_array = Array.from(document.querySelector("ul").querySelectorAll("li"))
    tasks_array.forEach(element => {
        if (element.querySelector("input").checked == false){
            element.classList.add("hide-todo")
        }else{
            element.classList.remove("hide-completed")
        }
    });
}
function filterByNone(){
    let tasks_array = Array.from(document.querySelector("ul").querySelectorAll("li"))
    tasks_array.forEach(element => {
        element.classList.remove("hide-todo")
        element.classList.remove("hide-completed")
    });
}

function toggleButtonsStatus(button_selected){
    let buttons = document.querySelectorAll(".btn-group .btn")
    Array.from(buttons).forEach(button => {
        button.classList.remove("active")
    });
    button_selected.classList.add("active")
}

async function main(){

    const form = document.querySelector("form")
    form.addEventListener("submit", submitForm)

    let rubbish_buttons = document.querySelectorAll(".btn-danger")
    rubbish_buttons.forEach(rubbish_button => {
        rubbish_button.addEventListener("click", OnClickedRubbishButton)
    });

    const todo_button = document.querySelector('[data-filter="todo"]');
    todo_button.addEventListener("click", OnClickedTodoButton);

    const done_button = document.querySelector('[data-filter="done"]');
    done_button.addEventListener("click", OnClickedDoneButton);

    const all_button = document.querySelector('[data-filter="all"]');
    all_button.addEventListener("click", OnClickedAllButton);

    let checkboxes = document.querySelectorAll("input[type=checkbox]")
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("click", OnClickedCheckbox);
    });
}
main()

export {main}