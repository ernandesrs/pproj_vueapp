<script>

import { ref } from 'vue';
import CollapseContent from './CollapseContent.vue';
import CollapseToggler from './CollapseToggler.vue';

export default {
    name: "Collapse",

    components: { CollapseToggler, CollapseContent },

    props: {
        icon: { type: String, default: null },
        hideArrow: { type: Boolean, default: false },
        text: { type: String, default: "Toggler texto" },
        collapsed: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        light: { type: Boolean, default: false }
    },

    setup(props) {
        let show = ref(props.collapsed);

        return {
            show
        };
    },

    methods: {
        toggler() {
            this.show = !this.show;
        }
    }
};

</script>

<template>

    <div class="collapse">
        <CollapseToggler @hasClicked="toggler" :icon="icon" :text="text" :dark="dark"
            :light="light" :hide-arrow="hideArrow" />

        <CollapseContent :show="show">
            <slot />
        </CollapseContent>
    </div>

</template>

<style scoped>
.collapse {
    @apply relative overflow-hidden mb-1;
}
</style>