/* --------------------------------------------------------
	VueJS - Task Manager
	Version: 	0.0.1
	Author: 	Steven Morrison
	Website:	www.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

var app = new Vue({
    el: "#app",
    lastNewTaskCategory: "",
    storageKey: "zaffri-vuejs-task-manager",
    data: {
        newCategory: '',
        modalVisible: false,
        zaffriModal: {
            type: "confirm",
            title: "Are you sure?",
            messageBody: "This is just some example body text.",
            confirmText: "Confirm",
            cancelText: "Cancel", // for confirm modal type only
            action: {
                type: null,
                index: 0
            },
        },
        categories: []
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
            var task = document.getElementById(category + '-task-input').value.trim();
            // add task to category.tasks array & hide input
            if(task.length) {
                this.categories[category].tasks.push(task);
                this.hideTaskInput(this.lastNewTaskCategory);
            }
            // update localStorage
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
        showModal: function(index, type) {
            // Modal action
            this.zaffriModal.action.type = type;
            this.zaffriModal.action.index = index;
            // Set visible
            this.modalVisible = true;
        },
        hideModal: function(action) {
            this.modalVisible = false;
            console.log(JSON.stringify(this.zaffriModal));
        }
    }
});