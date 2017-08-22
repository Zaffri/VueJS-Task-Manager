<template>
    <div>

        <div id="new-category-wrapper">
            <input type="text" v-model="newCategory" v-on:keyup.enter="createCategory" id="new-category-input" placeholder="New category" />
        </div>

        <ul id="category-list">

            <!-- Categories loop -->
            <li v-for="(cat, index) in categories" class="category-list-item">

                <div class="delete-icon category-delete-icon" v-on:click="showModal(index, 'category-delete')">X</div>
                
                <div class="category-name-wrapper">

                    <!-- Edit category -->
                    <div v-if="editCatNameCheck(index)">
                        <input class="category-name-edit-input" type="text" placeholder="Edit name" v-bind:value="cat.name" v-model="cat.name" v-on:keyup.enter="saveAppEdits()" />
                    </div>

                    <div v-else>
                        <div class="category-name" v-on:click="setEditState([index])">{{ cat.name }}</div>
                    </div>    
                </div>

                <div class="clear"></div>

                <ul class="task-list">
                    
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
                </ul>
            </li>
        </ul>

        <!-- Modal component -->
        <zaffri-modal v-bind:data="modalConfig" v-on:hide_modal_emit="modalCallback"></zaffri-modal>
    </div>
</template>
<style>
</style>
<script>
import Modal from '../components/Modal.vue';
import ModalConfig from '../exports/ModalConfig.js';
import AppInput from '../exports/AppInput.js';
import AppStorage from '../exports/AppStorage.js';

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
        props: ['categories', 'editState', 'newCategory'],
        methods: {
            // AppStorage
            createCategory: AppStorage.createCategory,
            createTask: AppStorage.createTask,
            deleteCategory: AppStorage.deleteCategory,
            deleteTask: AppStorage.deleteTask,
            saveAppEdits: AppStorage.saveAppEdits,
            toggleCompletion: AppStorage.toggleCompletion,
            updateAppStorage: AppStorage.updateAppStorage,
            
            // AppInput
            showTaskInput: AppInput.showTaskInput,
            hideTaskInput: AppInput.hideTaskInput,
            editCatNameCheck: AppInput.editCatNameCheck,
            editTaskNameCheck: AppInput.editTaskNameCheck,
            setEditState: AppInput.setEditState,
            clearEditState: AppInput.clearEditState,

            // Modal config
            showModal: ModalConfig.showModal,
            modalCallback: ModalConfig.modalCallback
        },
        components: {
            'ZaffriModal': Modal
        }
}
</script>