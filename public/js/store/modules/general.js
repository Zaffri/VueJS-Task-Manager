/**
 * @name TaskManager
 * @description general.js - general app store functions
 * @version 1.2.0
 * @author Steven Morrison <https://github.com/Zaffri/VueJS-Task-Manager/>
 */

const state = {
    storageKey: "zaffri-vuejs-task-manager",
    lastNewTaskCategory: "",
    newCategory: "",
    editState: {
        status: false,
        ids: []
    }
};

const getters = {
    getStorageKey: function(state) {
        return state.storageKey;
    },
    getLastNewTaskCategory: function(state) {
        return state.lastNewTaskCategory;
    },
    getEditState: function(state) {
        return state.editState;
    },
    getNewCategory: function(state) {
        return state.newCategory;
    }
}

const mutations = {
    updateLastNewTaskCategory(state, value) {
        state.lastNewTaskCategory = value;
    },
    updateEditState(state, value) {
        state.editState = value;
    },
    updateNewCategory(state, value) {
        state.newCategory = value;
    }
};

const actions = {
    updateLastNewTaskCategory: function(context, value) {
        context.commit('updateLastNewTaskCategory', value)
    },
    updateEditState: function(context, value) {
        context.commit('updateEditState', value)
    },
    updateNewCategory: function(context, value) {
        context.commit('updateNewCategory', value)
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}