


/**
 * Represents a task.
 * @param {string} title 
 * @param {bool} status - 2 choices: True if done, false if not.
 */
class Task {
    constructor(title, status) {
        this.title = title;
        this.status = status;
    }
    #title;
    #status = false;
    get title() {
        return this.#title;
    }
    set title(value) {
        this.#title = value;
    }
    get status() {
        return this.#status;
    }
    set status(value) {
        this.#status = value;
    }
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
    static generateId(){
        let uniqueId = Math.floor(Math.random() * 1000000000);
        return uniqueId;
    }
    createTaskElement(task){
        //creating list
        let li = Task.createElementCustom("li","", { class:"todo list-group-item d-flex align-items-center"})
        //creating task id
        let task_id = Task.generateId();
        //creating checkbox
        let input = Task.createElementCustom("input","",{class:"form-check-input me-1",type:"checkbox",value:"",id:`todo-${task_id}`})
        //creating label
        let label = Task.createElementCustom("label",task.title,{class:"ms-2 form-check-label",for:`todo-${task_id}`})
        // creating rubbish button
        let rubbish = Task.createElementCustom("label","",{class:"ms-auto btn btn-danger btn-sm"})
        let rubbish_icon = Task.createElementCustom("i","",{class:"bi-trash"})
        rubbish.append(rubbish_icon)
        // append to list
        li.append(input,label,rubbish);
        return li;
    }
    
}

export {Task};