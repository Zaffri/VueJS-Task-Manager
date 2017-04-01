/* --------------------------------------------------------
	VueJS - Modal Component
	Version: 	0.0.4
	Author: 	Steven Morrison
	Website:	www.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data'],
    methods: {
        closeModal: function(action = null) {
            this.$emit('hide_modal_emit', action);
            this.data.visible = false;
        },
        confirmCallback: function(action, callbackData) {
            this.data.confirmCallback(action, callbackData);
        }
    }
});
