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

                    <task 
                        v-bind:cat="cat" 
                        v-bind:index="index"
                        v-bind:edit-state="editState"
                        v-bind:categories="categories"
                    ></task>
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
import Task from '../components/Task.vue';
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
            deleteCategory: AppStorage.deleteCategory,
            deleteTask: AppStorage.deleteTask,
            saveAppEdits: AppStorage.saveAppEdits,
            updateAppStorage: AppStorage.updateAppStorage,
            
            // AppInput
            editCatNameCheck: AppInput.editCatNameCheck,
            setEditState: AppInput.setEditState,
            clearEditState: AppInput.clearEditState,

            // Modal config
            showModal: ModalConfig.showModal,
            modalCallback: ModalConfig.modalCallback
        },
        components: {
            'ZaffriModal': Modal,
            'Task': Task
        }
}
</script>