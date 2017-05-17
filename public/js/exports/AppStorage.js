/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 0.2.0
 * @author Steven Morrison <steven@zaffri.com>
 */

const AppStorage = {

    createCategory: function() {
        let input = this.newCategory.trim();

        // if not default val, then add new
        if(input.length) {
            this.categories.push({
                name: input,
                tasks: []
            });
            // reset new cat val
            this.newCategory = "";
            // update localStorage
            this.updateAppStorage();
        }
    },

    deleteCategory: function(data) {
        // remove category item
        this.categories.splice(data.index, 1);
        this.updateAppStorage();
    },

    createTask: function(category) {
        let taskInput = document.getElementById(category + '-task-input').value.trim();
            
        if(taskInput.length) {
            // add task to category.tasks array & hide input    
            var task = {
                'text': taskInput,
                'complete' : 0  
            };

            this.categories[category].tasks.push(task);
            this.hideTaskInput(this.lastNewTaskCategory);
        }
        // update localStorage
        this.updateAppStorage();
    },
    
    deleteTask: function(data) {
        // remove task item
        this.categories[data.parentIndex].tasks.splice(data.index, 1);
        this.updateAppStorage();
    },

    updateAppStorage: function() {
        // Check if this.categories isn't empty
        if(this.categories.length) {
            // true: use setItem to save new data
            localStorage.setItem(this.storageKey, JSON.stringify(this.categories));
        }   else {
            // false: use removeItem from localStorage
            localStorage.removeItem(this.storageKey);
        }
    },

    toggleCompletion: function(taskIndex, index, complete) {
        // Default false
        var updatedStatus = 0;
        // Switch val if necessary (!= false/updatedStatus)
        if(!complete) updatedStatus = 1;

        // Update data & update local storage
        this.categories[index].tasks[taskIndex].complete = updatedStatus;
        this.updateAppStorage();
    }
};

export default AppStorage;