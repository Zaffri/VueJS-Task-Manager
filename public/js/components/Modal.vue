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
    .zaffri-modal-template {
        display: none;
    }

    .zaffri-modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1010;
        background: rgba(0,0,0, 0.75);
        width: 100%;
        height: 100%;
    }

    .zaffri-modal-body {
        width: 380px;
        min-height: 180px;
        background: #fff;
        margin: 0 auto;
        margin-top: 40px;
        padding: 10px 30px;
    }

    .zaffri-modal-message {
        padding: 15px 0 15px;
    }

    .zaffri-modal-button-area {
        padding: 25px 0 15px 0;
    }

    .clear {
        clear: both;
    }
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