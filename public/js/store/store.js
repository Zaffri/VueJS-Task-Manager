/**
 * @name TaskManager
 * @description store.js - vuex main store
 * @version 1.2.0
 * @author Steven Morrison <https://github.com/Zaffri/VueJS-Task-Manager/>
 */

import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import General from './modules/general';

Vue.use(Vuex);

let env = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        General
    },
    strict: env,
});