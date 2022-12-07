<script>

import { ref } from 'vue';
import ButtonUi from './ButtonUi.vue';

export default {
    name: "ButtonConfirmationUi",

    components: { ButtonUi },

    emits: {
        "confirmed": null,
        "canceled": null
    },

    props: {
        // button props
        text: { type: String, default: null },
        icon: { type: String, default: null },
        iconEnd: { type: Boolean, default: false },
        variant: { type: String, default: null },
        size: { type: String, default: null },
        full: { type: Boolean, default: false },
        noRounded: { type: Boolean, default: false },
        noShadow: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },

        // confirm button props
    },

    setup(props) {
        let showConfirmationButtons = ref(false);

        return {
            showConfirmationButtons
        };
    },

    methods: {
        showConfirmationButtonsPopup() {
            this.showConfirmationButtons = true;
        },

        hideConfirmationButtonsGroup() {
            this.showConfirmationButtons = false;
        },

        confirmAction() {
            this.hideConfirmationButtonsGroup();
            this.emitConfirmEvent();
        },

        cancelAction() {
            this.hideConfirmationButtonsGroup();
            this.emitCancelEvent();
        },

        emitConfirmEvent() {
            this.$emit("confirmed", this);
            console.log("confirmed");
        },

        emitCancelEvent() {
            this.$emit("canceled", this);
            console.log("canceled");
        },
    }
}

</script>

<template>

    <div class="flex justify-center items-center relative">
        <ButtonUi @click="showConfirmationButtonsPopup" :text="text" :icon="icon"
            :variant="variant" :size="size" :full="full" :no-rounded="noRounded"
            :iconEnd="iconEnd" :disabled="disabled" />

        <div v-if="showConfirmationButtons"
            class="flex justify-center w-full h-100 bg-slate-100 bg-opacity-95 shadow-md absolute border rounded border-slate-400 border-opacity-50 space-x-2 p-2 z-10">
            <ButtonUi @click="cancelAction" icon="x" variant="danger" />
            <ButtonUi @click="confirmAction" icon="check" variant="success" />
        </div>
    </div>

</template>
