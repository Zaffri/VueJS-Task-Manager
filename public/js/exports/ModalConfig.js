/**
 * @name TaskManager
 * @description VueJS task manager.
 * @version 0.2.0
 * @author Steven Morrison <steven@zaffri.com>
 */

const ModalConfig = {

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
            } else {
                this.deleteTask(callbackData);
            }
        }
    }
};

export default ModalConfig;