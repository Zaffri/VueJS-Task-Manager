/**
 * @name TaskManager
 * @description main.js - main entry point for app.
 * @version 1.2.0
 * @author Steven Morrison <https://github.com/Zaffri/VueJS-Task-Manager/>
 */

// Vue and Main components
import Vue from 'vue';
import Category from './components/Category.vue'

// Main app instance
new Vue({
    el: "#app",
    store: require('./store/store').default,
    data: {
        newCategory: '',
        editState: {
            status: false,
            ids: []
        },
        categories: []
    },
    created: function() {
        // Load app data
        var data = localStorage.getItem(this.storageKey);
        
        if(data != null && data != "") {
            this.categories = JSON.parse(data.trim());
        };
    },
    computed: {
        storageKey() { 
            return this.$store.getters.getStorageKey;
        },
        lastNewTaskCategory() { 
            return this.$store.getters.getLastNewTaskCategory;
        }
    },
    components: { 
        'Category': Category
    }
});