/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 0.2.0
 * @author Steven Morrison <steven@zaffri.com>
 */

const AppInput = {

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
    }
};

export default AppInput;