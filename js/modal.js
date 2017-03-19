/* --------------------------------------------------------
	VueJS - Modal Component
	Version: 	0.0.3
	Author: 	Steven Morrison
	Website:	www.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data'],
    methods: {
        closeModal: function(action = null) {
            var callbackData = {};

            if(this.data.callbackData != undefined) callbackData = this.data.callbackData;
            if(this.data.confirmCallback != undefined) this.confirmCallback(action, callbackData);

            this.data.visible = false;
        },
        confirmCallback: function(action, callbackData) {
            this.data.confirmCallback(action, callbackData);
        }
    }
});