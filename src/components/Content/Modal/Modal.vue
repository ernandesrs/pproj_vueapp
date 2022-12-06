<script>

import { ref } from 'vue';
import ButtonUi from '../../Ui/Buttons/ButtonUi.vue';

export default {
    name: "Modal",

    components: { ButtonUi },

    emits: {
        "showModal": null,
        "hideModal": null,
    },

    props: {
        show: { type: Boolean, default: false }
    },

    setup(props) {
        let showModal = ref(false);

        return {
            showModal
        };
    },

    watch: {
        show: {
            immediate: true,
            handler(nv) {
                if (nv) {
                    this.showModalEmitEvent();
                } else {
                    this.hideModalEmitEvent();
                }
            }
        }
    },

    methods: {
        showModalEmitEvent() {
            this.showModal = true;
            this.$emit("showModal", this);
        },

        hideModalEmitEvent() {
            this.showModal = false;
            this.$emit("hideModal", this);
        }
    },
};

</script>

<template>

    <div v-if="showModal" class="modal-wrapp">
        <div class="modal">
            <div class="modal-actions">
                <ButtonUi @click="hideModalEmitEvent" icon="x" no-shadow
                    class="!px-0 !text-slate-200" />
            </div>
            <div class="modal-dialog">
                <div class="modal-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores
                    perspiciatis, numquam alias, velit voluptas accusamus magnam, nostrum
                    eveniet
                    architecto aliquid eum dolorem rerum. Consequuntur, distinctio magni.
                    Assumenda,
                    ratione excepturi?
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.modal-wrapp {
    @apply flex items-center justify-center w-full h-screen bg-black bg-opacity-75 fixed top-0 left-0 z-[999] p-2;
}

.modal {
    @apply w-full max-w-md;
}

.modal>.modal-actions {
    @apply py-1 text-right text-2xl;
}

.modal>.modal-dialog {
    @apply bg-slate-200 relative rounded py-4 px-5;
}
</style>