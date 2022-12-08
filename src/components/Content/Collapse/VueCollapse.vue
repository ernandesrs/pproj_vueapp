<script>

import { ref } from 'vue';
import VueCollapseContent from './VueCollapseContent.vue';
import VueCollapseToggler from './VueCollapseToggler.vue';

export default {
    name: "VueCollapse",

    components: { VueCollapseToggler, VueCollapseContent },

    props: {
        icon: { type: String, default: null },
        hideArrow: { type: Boolean, default: false },
        text: { type: String, default: "Toggler texto" },
        collapsed: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        light: { type: Boolean, default: false },
        transparent: { type: Boolean, default: false }
    },

    emits: {
        "showed": null,
        "hidden": null
    },

    setup(props) {
        let show = ref(props.collapsed);

        return {
            show
        };
    },

    watch: {
        show(nv) {
            if (nv) {
                this.emitShowedEvent();
            } else {
                this.emitHiddenEvent();
            }
        }
    },

    methods: {
        toggler() {
            this.show = !this.show;
        },

        emitShowedEvent() {
            this.$emit("showed", this);
        },

        emitHiddenEvent() {
            this.$emit("hidden", this);
        },
    }
};

</script>

<template>

    <div class="collapse">
        <vue-collapse-toggler @hasClicked="toggler" :icon="icon" :text="text" :dark="dark"
            :light="light" :hide-arrow="hideArrow" :transparent="transparent" />

        <vue-collapse-content :show="show">
            <slot />
        </vue-collapse-content>
    </div>

</template>

<style scoped>
.collapse {
    @apply relative overflow-hidden;
}
</style>