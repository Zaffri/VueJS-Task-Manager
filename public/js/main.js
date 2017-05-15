/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 0.1.0
 * @since 0.1.0
 * @author Steven Morrison <steven@zaffri.com>
 */

import Vue from 'vue';
import Modal from './components/Modal.vue'

// Main app instance
new Vue({
    el: "#app",
    lastNewTaskCategory: "",
    storageKey: "zaffri-vuejs-task-manager",
    data: {
        newCategory: '',
        modalConfig: {
             // Modal visibility
            visible: false,

            // type: notify || confirm
            type: "confirm",

            // display data
            title: "Delete",
            messageBody: "Are you sure you want to delete this?",
            confirmText: "Confirm",

            // Only required for confirm modal
            cancelText: "Cancel",
            callbackData: {}
        },
        categories: [] // all app data
    },
    created: function() {
        // "created" life cycle
        // localStorage.removeItem(this.storageKey);
        var data = localStorage.getItem(this.storageKey);
        
        if(data != null && data != "") {
            this.categories = JSON.parse(data.trim());
        };
    },
    methods: {
        createCategory: function() {
            var input = this.newCategory.trim();

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
        showTaskInput: function(index) {
            var last = parseInt(this.lastNewTaskCategory);

            // hide last new task box
            if(last >= 0) {
                this.hideTaskInput(last);
            }
            // show new task (index = current cat index)
            document.getElementById(index + '-task-input').style.display = "block";
            // update last index
            this.lastNewTaskCategory = index;
        },
        hideTaskInput: function(last) {
            // If block display, then hide & clear
            var input = document.getElementById(last + '-task-input');
            var inputDisplay = input.style.display;

            if(inputDisplay == "block") input.style.display = "none";
            input.value = "";
        },
        createTask: function(category) {
            var taskInput = document.getElementById(category + '-task-input').value.trim();
            
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
        toggleCompletion: function(taskIndex, index, complete) {
            // Default false
            var updatedStatus = 0;
            // Switch val if necessary (!= false/updatedStatus)
            if(!complete) updatedStatus = 1;

            // Update data & update local storage
            this.categories[index].tasks[taskIndex].complete = updatedStatus;
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
        showModal: function(index, type, parentIndex = null) { // parentIndex for tasks (cat index)
            // Assign callback data
            this.modalConfig.callbackData = {
                type: type,
                index: index,
                parentIndex: parentIndex
            }
            
            // Set visible
            this.modalConfig.visible = true;
        },
        modalCallback: function(action) {
            // Hide modal
            this.modalConfig.visible = false;

            // if action = true (confirm clicked)
            if(action == true) {
                var callbackData = this.modalConfig.callbackData;
                // check action type
                if(callbackData.type == "category-delete") {
                    this.deleteCategory(callbackData);
                }   else {
                    this.deleteTask(callbackData);
                }
            }
        }
    },
    components: { 'ZaffriModal': Modal },
});