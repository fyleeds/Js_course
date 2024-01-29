


/**
 * Represents a task.
 * @param {string} title 
 * @param {bool} status - 2 choices: True if done, false if not.
 */
class Task {
    /** @type {Task} */
    constructor(title, status) {
        let li = document.getElementById("todolist-item").content.cloneNode(true).firstElementChild;
        //creating task id
        let task_id = Math.floor(Math.random() * 1000000000);
        //creating checkbox
        let input = li.querySelector("input")
        input.setAttribute("id",`todo-${task_id}`)
        //creating label
        let label = li.querySelector("label")
        label.setAttribute("for",`todo-${task_id}`)
        label.innerText = title;
        // creating rubbish button
        let rubbish = li.querySelector(".btn-danger")
        // append to list
        li.append(input,label,rubbish);
        return li;
    }
    /** 
     * @param {string} tag
     * @param {string} content
     * @param {object} attributes
     * @returns {HTMLElement}
     */
    static createElementCustom(tag, content, attributes) {
        let element = document.createElement(tag);
        element.innerText = content;
        if (attributes === undefined) {
            return element;
        }
        for (let attr in attributes) {
            element.setAttribute(attr, attributes[attr]);
        }
        return element;
    }
    
}

export {Task};