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
    data: {
        newCategory: '',
        categories: [
            {
                name: "Cat1",
                tasks: [
                    "Task 1",
                    "Task 2",
                    "Task 3"
                ]
            },
            {
                name: "Cat2",
                tasks: [
                    "Task 1",
                    "Task 2",
                    "Task 3",
                    "Task 4"
                ]
            },
            {
                name: "Cat3",
                tasks: [
                    "Task 1",
                    "Task 2"
                ]
            }
        ]
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
            }
        },
        showTaskInput: function(index) {
            var last = parseInt(this.lastNewTaskCategory);

            // hide last new task box
            if(last >= 0) {
                document.getElementById(last).style.display = "none";
            }
            // show new task (index = current cat index)
            document.getElementById(index).style.display = "block";
            // update last index
            this.lastNewTaskCategory = index;
        },
        createTask(category) {
            var task = document.getElementById(category).value.trim();
            // add task to category.tasks array
            if(task.length) {
                this.categories[category].tasks.push(task);
            }
        }
    }
});