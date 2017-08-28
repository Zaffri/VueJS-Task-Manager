/**
 * @name TaskManager
 * @description store.js - vuex main store
 * @version 1.2.0
 * @author Steven Morrison <https://github.com/Zaffri/VueJS-Task-Manager/>
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let env = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        
    },
    strict: env,
});