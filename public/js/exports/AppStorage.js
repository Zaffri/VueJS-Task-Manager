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
    }

};

export default AppStorage