<script>

import { ref, Transition } from 'vue';
import ButtonUi from '../../Ui/Buttons/ButtonUi.vue';
import Icon from '../../Ui/Icon.vue';

export default {
    name: "Modal",

    components: { ButtonUi, Transition, Icon },

    emits: {
        "showModal": null,
        "hiddenModal": null,
    },

    props: {
        show: { type: Boolean, default: false },
        noCloseOnClickOut: { type: Boolean, default: false },
        top: { type: Boolean, default: false },
        size: { type: String, default: null },
        icon: { type: String, default: null },
        title: { type: String, default: null },
    },

    setup(props) {
        let showWrapp = ref(false);
        let showModal = ref(false);

        return {
            showWrapp, showModal
        };
    },

    watch: {
        show: {
            immediate: true,
            handler(nv) {
                if (nv) {
                    this.showModalWrapp();
                } else {
                    this.hideModalWrapp();
                }
            }
        }
    },

    methods: {
        showModalWrapp() {
            this.showWrapp = true;
        },

        hideModalWrapp() {
            this.showWrapp = false;
            this.emitModalHiddenEvent();
        },

        showModalModal() {
            this.showModal = true;
            this.emitModalShowedEvent();
        },

        hideModalModal() {
            this.showModal = false;
        },

        wrappIsShowed() {
            this.showModalModal();
        },

        emitModalShowedEvent() {
            this.$emit("showModal", this);

            this.addClickOutEvent();
        },

        emitModalHiddenEvent() {
            this.$emit("hiddenModal", this);

            this.removeClickOutEvent();
        },

        addClickOutEvent() {
            if (this.noCloseOnClickOut) return;

            document.addEventListener("click", this.clickOutListener);
        },

        removeClickOutEvent() {
            if (this.noCloseOnClickOut) return;

            document.removeEventListener("click", this.clickOutListener);
        },

        clickOutListener(event) {
            if (!this.$refs.modal) return;

            if (!this.$refs.modal.contains(event.target)) {
                this.hideModalModal();
            }
        }
    },
};

</script>

<template>

    <Transition @afterEnter="wrappIsShowed" name="fadebkdp">
        <div v-if="showWrapp" :class="[
            'modal-wrapp',
            {
                'modal-top': this.top
            }
        ]">
            <Transition @afterLeave="hideModalWrapp" name="showmodal">
                <div v-if="showModal" ref="modal" :class="[
                    'modal',
                    this.size ? 'modal-' + this.size : null
                ]">
                    <div class="modal-dialog">
                        <div class="modal-header">
                            <h4 v-if="title" class="modal-title">
                                <Icon v-if="icon" :icon="icon" class="mr-2 text-xl lg:text-2xl" />
                                {{ title }}
                            </h4>
                            <ButtonUi @click="hideModalModal" icon="x" no-shadow
                                class="!p-0 ml-auto" />
                        </div>
                        <div class="modal-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                            asperiores
                            perspiciatis, numquam alias, velit voluptas accusamus magnam,
                            nostrum
                            eveniet
                            architecto aliquid eum dolorem rerum. Consequuntur, distinctio
                            magni.
                            Assumenda,
                            ratione excepturi?
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </Transition>

</template>

<style scoped>
.modal-wrapp {
    @apply flex items-center justify-center w-full h-screen bg-black bg-opacity-75 fixed top-0 left-0 z-[999] p-2 lg:p-4;
}

.modal-top {
    @apply items-start;
}

.modal {
    @apply w-full max-w-md;
}

.modal.modal-md {
    @apply max-w-lg;
}

.modal.modal-lg {
    @apply max-w-2xl
}

.modal.modal-xl {
    @apply max-w-4xl
}

.modal.modal-full {
    @apply max-w-screen-xl h-[97vh] lg:h-[95vh];
}

.modal.modal-full>.modal-dialog {
    @apply h-full;
}

.modal>.modal-dialog {
    @apply bg-slate-200 relative rounded;
}

.modal>.modal-dialog>.modal-header {
    @apply flex items-center px-4 pt-4 pb-2 lg:px-6 text-right text-3xl;
}

.modal>.modal-dialog>.modal-header>.modal-title {
    @apply flex items-center font-semibold text-lg lg:text-xl text-gray-600;
}

.modal>.modal-dialog>.modal-content {
    @apply px-4 pb-4 pt-2 md:px-6 md:pb-6 md:pt-2;
}

/**
 * TRANSITIONS
 */
.fadebkdp-enter-active,
.fadebkdp-leave-active {
    @apply duration-300;
}

.fadebkdp-enter-from,
.fadebkdp-leave-to {
    @apply opacity-0;
}

.showmodal-enter-active {
    @apply duration-300 ease-in-out;
}

.showmodal-leave-active {
    @apply duration-200 ease-in;
}

.showmodal-enter-from,
.showmodal-leave-to {
    @apply opacity-0 scale-90;
}

.showmodal-leave-from,
.showmodal-enter-to {
    @apply opacity-100 scale-100;
}
</style>