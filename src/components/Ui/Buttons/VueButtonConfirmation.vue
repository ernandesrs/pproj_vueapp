<script>

import { ref } from 'vue';
import VueButton from './VueButton.vue';

export default {
    name: "VueButtonConfirmation",

    components: { VueButton },

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
            setTimeout(() => {
                this.setClickOutMonitor();
            }, 0);
        },

        hideConfirmationButtonsGroup() {
            this.showConfirmationButtons = false;
            this.removeClickOutMonitor();
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
        },

        emitCancelEvent() {
            this.$emit("canceled", this);
        },

        setClickOutMonitor() {
            document.addEventListener("click", this.clickOutListener);
        },

        removeClickOutMonitor() {
            document.removeEventListener("click", this.clickOutListener);
        },

        clickOutListener(event) {
            if (!this.$refs?.confirmationPopup) return;

            if (!this.$refs.confirmationPopup.contains(event.target)) {
                this.cancelAction();
            }
        }
    }
}

</script>

<template>

    <div class="flex justify-center items-center relative">
        <vue-button @click="showConfirmationButtonsPopup" :text="text" :icon="icon"
            :variant="variant" :size="size" :full="full" :no-rounded="noRounded"
            :iconEnd="iconEnd" :disabled="disabled" />

        <Transition name="showpopup">
            <div v-if="showConfirmationButtons" ref="confirmationPopup"
                class="flex justify-center w-full h-100 bg-slate-100 dark:bg-gray-400 bg-opacity-95 shadow-md absolute border rounded border-slate-400 border-opacity-50 space-x-2 p-2 z-10">
                <vue-button @click="cancelAction" icon="x" variant="danger" />
                <vue-button @click="confirmAction" icon="check" variant="success" />
            </div>
        </Transition>
    </div>

</template>

<style scoped>
.showpopup-enter-active {
    @apply duration-500 ease-in-out;
}

.showpopup-leave-active {
    @apply duration-200 ease-out;
}

.showpopup-enter-from,
.showpopup-leave-to {
    @apply opacity-0 scale-90;
}
</style>