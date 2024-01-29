


/**
 * Represents a task.
 * @param {string} title 
 * @param {bool} status - 2 choices: True if done, false if not.
 */
class Task {
    /** @type {Task} */
    constructor(title, status) {
        //creating list
        let li = Task.createElementCustom("li","", { class:"todo list-group-item d-flex align-items-center"})
        //creating task id
        let task_id = Math.floor(Math.random() * 1000000000);
        //creating checkbox
        let input = Task.createElementCustom("input","",{class:"form-check-input me-1",type:"checkbox",value:"",id:`todo-${task_id}`})
        //creating label
        let label = Task.createElementCustom("label",title,{class:"ms-2 form-check-label",for:`todo-${task_id}`})
        // creating rubbish button
        let rubbish = Task.createElementCustom("label","",{class:"ms-auto btn btn-danger btn-sm"})
        let rubbish_icon = Task.createElementCustom("i","",{class:"bi-trash"})
        rubbish.append(rubbish_icon)
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