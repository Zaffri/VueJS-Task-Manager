<template>
    <div>

        <!-- Task create -->
        <li class="task-list-item task-new">
            <p v-on:click="showTaskInput(index)">Add task..</p>
        </li>

        <li class="task-list-item">
            <input type="text" v-bind:id="index + '-task-input'" v-on:keyup.enter="createTask(index)" placeholder="new task..." class="new-task-input" />
        </li>


        <!-- Tasks loop -->
        <li v-for="(task, taskIndex) in cat.tasks" class="task-list-item">

            <div class="complete-icon-wrapper">
                <label for="complete-icon" v-on:click="toggleCompletion(taskIndex, index, task.complete)">
                    <span class="complete-icon-label" v-bind:class="{'task-complete-icon-label': task.complete}"></span>
                </label>
                
                <input type="checkbox" name="complete-icon" class="complete-icon" />
            </div>

            <div class="delete-icon task-delete-icon" v-on:click="showModal(taskIndex, 'task-delete', index)">X</div>
            
            <!-- Edit task -->
            <div v-if="editTaskNameCheck(index, taskIndex)">
                <input class="task-name-edit-input" type="text" placeholder="Edit name" v-bind:value="task.text" v-model="task.text" v-on:keyup.enter="saveAppEdits()" />
            </div>

            <div v-else>
                <p class="task-text" v-bind:class="{'task-complete': task.complete}" v-on:click="setEditState([index, taskIndex])">
                    {{ task.text }}
                </p>
            </div>

            <div class="clear"></div>
        </li>

        <!-- Modal component -->
        <zaffri-modal v-bind:data="modalConfig" v-on:hide_modal_emit="modalCallback"></zaffri-modal>

    </div>
</template>
<style>
</style>
<script>
import AppInput from '../exports/AppInput.js';
import AppStorage from '../exports/AppStorage.js';
import Modal from '../components/Modal.vue';
import ModalConfig from '../exports/ModalConfig.js';

export default {
        data () {
            return {
                modalConfig: {
                    visible: false,
                    type: "confirm",
                    title: "Delete",
                    messageBody: "Are you sure you want to delete this?",
                    confirmText: "Confirm",
                    cancelText: "Cancel",
                    callbackData: {}
                }
            }
        },
        methods: {
            // AppInput
            clearEditState: AppInput.clearEditState,
            editTaskNameCheck: AppInput.editTaskNameCheck,
            hideTaskInput: AppInput.hideTaskInput,
            setEditState: AppInput.setEditState,
            showTaskInput: AppInput.showTaskInput,

            // AppStorage
            createTask: AppStorage.createTask,
            deleteTask: AppStorage.deleteTask,
            saveAppEdits: AppStorage.saveAppEdits,
            toggleCompletion: AppStorage.toggleCompletion,
            updateAppStorage: AppStorage.updateAppStorage,

            // Modal config
            showModal: ModalConfig.showModal,
            modalCallback: ModalConfig.modalCallback
        },
        computed: {
            storageKey() { 
                return this.$store.getters.getStorageKey;
            }
        },
        components: {
            'ZaffriModal': Modal
        },
        props: ['cat', 'index', 'editState', 'categories']
}
</script>