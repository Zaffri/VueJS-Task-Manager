/**
 * @name TaskManager
 * @desc AppInput - deals with app user input functions.
 * @version 1.0.1
 * @author Steven Morrison <steven@zaffri.com>
 */

const AppInput = {

    /**
     * @desc shows task input field.
     * @param {Number|String} index
     */
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

    /**
     * @desc hides task input field.
     * @param {Number|String} last
     */
    hideTaskInput: function(last) {
        // If block display, then hide & clear
        var input = document.getElementById(last + '-task-input');
        var inputDisplay = input.style.display;

        if(inputDisplay == "block") input.style.display = "none";
        input.value = "";
    },

    /**
     * @desc check if curr category is currently being edited.
     * @param {Number} currCat - cat id
     * @return {Boolean} 
     */
    editCatNameCheck: function(currCat) {
        // If one id then we are editing a category
        if(this.editState.ids.length == 1 && this.editState.ids[0] == currCat) {
            return true;
        }
        return false;
    },

    editTaskNameCheck: function(currCat, currTask) {
        // If two ids then we are editing a task
        if(this.editState.ids.length == 2) {
            if(this.editState.ids[0] == currCat && this.editState.ids[1] == currTask) {
                return true;
            }
        }
        return false;
    },

    /**
     * @desc updates apps editState property.
     * @param {Array} ids - defines ids which are the subject of edit.
     */
    setEditState: function(ids) {
        this.editState = {
            status: true, // Currently being edited
            ids: ids
        };
    },

    /**
     * @desc clears app editState to default.
     */
    clearEditState: function() {
        this.editState = {
            status: false,
            ids: [] // First id is always a cat id, second is task (optional)
        };
    }
};

export default AppInput;