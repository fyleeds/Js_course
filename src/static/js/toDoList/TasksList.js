


/**
 * Represents a tasks list.
 * @typedef {Object} TasksList
 */
class TasksList {
    /**@typedef {Task[]} */
    #tasks = []
    /**
     * @param {Task[]} tasks
     */
    constructor(tasks) {
        this.#tasks = tasks;
    }
    appendTo(element) {
        const list = document.querySelector("ul");
        for (let task of this.#tasks) {
            const t = task.getTask()
            t.appendTo(list);
        }
    }
}

export {TasksList};