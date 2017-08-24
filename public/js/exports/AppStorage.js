/**
 * @name TaskManager
 * @desc AppStorage - handles app data.
 * @version 1.2.0
 * @author Steven Morrison <https://github.com/Zaffri/VueJS-Task-Manager/>
 */

const AppStorage = {

    /**
     * @desc creates new category.
     */
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

    /**
     * @desc hides inputs (clears edit state) and updates localStorage. 
     */
    saveAppEdits: function() {
        // clear edit state & update storage
        this.clearEditState();
        this.updateAppStorage();
    },

    /**
     * @desc deletes a specific category based on arr index.
     * @param {Object} data
     */
    deleteCategory: function(data) {
        // remove category item
        this.categories.splice(data.index, 1);
        this.updateAppStorage();
    },

    /**
     * @desc creates task for specific category.
     * @param {Number|String} category
     */
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
    
    /**
     * @desc remove a specific task from a specific category.
     * @param {Object} data
     */
    deleteTask: function(data) {
        // remove task item
        this.categories[data.parentIndex].tasks.splice(data.index, 1);
        this.updateAppStorage();
    },

    /**
     * @desc takes current category (arr of objects) and saves it in localStorage
     */
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

    /**
     * @desc updates category object - toggles complete boolean
     * @param {Number|String} taskIndex
     * @param {Number|String} index - categoryIndex
     * @param {Boolean|Number|String} complete
     */
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