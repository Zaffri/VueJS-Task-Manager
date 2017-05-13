<template id="zaffri-modal-template" class="zaffri-modal-template">
    <div v-if="data.visible" class="zaffri-modal">

        <div class="zaffri-modal-body">
            <header><h3>{{ data.title }}</h3></header>

            <section class="zaffri-modal-message">
                <p>{{ data.messageBody }}</p>
            </section>

            <div class="zaffri-modal-button-area">
                    
                <div v-if="data.type == 'confirm'">
                    <button @click="closeModal(true)">{{ data.confirmText }}</button>
                    <button @click="closeModal(false)">{{ data.cancelText }}</button>
                </div>

                <div v-else>
                    <button @click="closeModal">{{ data.confirmText }}</button>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
</style>
<script>
export default {
        data () {
            return {}
        },
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
}
</script>