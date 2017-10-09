/**
 * @name TaskManager
 * @description general.js - general app stire functions
 * @version 1.2.0
 * @author Steven Morrison <https://github.com/Zaffri/VueJS-Task-Manager/>
 */

const state = {
    storageKey: "zaffri-vuejs-task-manager",
    lastNewTaskCategory: "",
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
    }
}

const mutations = {
    updateLastNewTaskCategory(state, value) {
        state.lastNewTaskCategory = value;
    },
    updateEditState(state, value) {
        state.editState = value;
    }
};

const actions = {
    updateLastNewTaskCategory: function(context, value) {
        context.commit('updateLastNewTaskCategory', value)
    },
    updateEditState: function(context, value) {
        context.commit('updateEditState', value)
    }
};

export default {
  state,
  getters,
  actions,
  mutations
}