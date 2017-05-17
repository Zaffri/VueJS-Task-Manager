/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 0.2.0
 * @author Steven Morrison <steven@zaffri.com>
 */

// Vue and Main components
import Vue from 'vue';
import Modal from './components/Modal.vue';

// App Exports
import ModalConfig from './exports/ModalConfig.js';
import AppStorage from './exports/AppStorage.js';

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
        createCategory: AppStorage.createCategory,
        deleteCategory: AppStorage.deleteCategory,
        createTask: AppStorage.createTask,
        deleteTask: AppStorage.deleteTask,
        updateAppStorage: AppStorage.updateAppStorage,
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
        toggleCompletion: function(taskIndex, index, complete) {
            // Default false
            var updatedStatus = 0;
            // Switch val if necessary (!= false/updatedStatus)
            if(!complete) updatedStatus = 1;

            // Update data & update local storage
            this.categories[index].tasks[taskIndex].complete = updatedStatus;
            this.updateAppStorage();
        },
        showModal: ModalConfig.showModal,
        modalCallback: ModalConfig.modalCallback
    },
    components: { 'ZaffriModal': Modal },
});