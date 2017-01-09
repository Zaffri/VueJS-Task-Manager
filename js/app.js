var app = new Vue({
    el: "#app",
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

            if(input.length) {
                this.categories.push({
                    name: input,
                    tasks: []
                });

                this.newCategory = "";
            }
        },
        createTask(category) {
            console.log(category);
        }
    }
});