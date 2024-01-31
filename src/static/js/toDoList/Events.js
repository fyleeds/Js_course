import { Task as task} from "./Task.js";

/**
 * 
 * @param {*} e 
 * @returns {task}
 */
function submitForm(e){
    const form = e.currentTarget
    const data = new FormData(form)
    let title = data.get("title")
    if (title.length < 1) {
        e.preventDefault()
        alert("no title : please insert a title ! ")
        return
    }else{
        e.preventDefault()
        return new task(title, false)
    }
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
    task.appendTo(document.querySelector("#todolist"))

    const form = document.querySelector("form")
    form.addEventListener("submit", submitForm)

    const todo_button = document.querySelector('[data-filter="todo"]');
    todo_button.addEventListener("click", OnClickedTodoButton);

    const done_button = document.querySelector('[data-filter="done"]');
    done_button.addEventListener("click", OnClickedDoneButton);

    const all_button = document.querySelector('[data-filter="all"]');
    all_button.addEventListener("click", OnClickedAllButton);

}
main()

export {main}