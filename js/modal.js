/* --------------------------------------------------------
	VueJS - Modal Component
	Version: 	0.0.1
	Author: 	Steven Morrison
	Website:	www.zaffri.com
	GitHub:		github.com/Zaffri
-------------------------------------------------------- */

var ZaffriModal = Vue.component('zaffri-modal', {
    template: "#zaffri-modal-template",
    props: ['data'],
    methods: {
        hideModal: function(action = null) {
            this.$emit('hide_modal_emit', action);
        }
    }
});