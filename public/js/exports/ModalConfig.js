/**
 * @name TaskManager
 * @desc ModalConfig - handles my modal actions.
 * @version 1.2.0
 * @author Steven Morrison <https://github.com/Zaffri/VueJS-Task-Manager/>
 */

const ModalConfig = {

    /**
     * @desc initiates modal and passes stores callback data.
     * @param {Number|String} index - categoryIndex
     * @param {String} type - modal type
     * @param {Number|String} parentIndex - taskIndex (optional)
     */
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

    /**
     * @desc is callback function thats called on modal close/confirm.
     * @param {Boolean|Number|String} action - users action.
     */
    modalCallback: function(action) {
        // Hide modal
        this.modalConfig.visible = false;

        // if action = true (confirm clicked)
        if(action == true) {
            var callbackData = this.modalConfig.callbackData;
            // check action type
            if(callbackData.type == "category-delete") {
                this.deleteCategory(callbackData);
            } else {
                this.deleteTask(callbackData);
            }
        }
    }
};

export default ModalConfig;