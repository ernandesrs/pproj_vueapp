<script>

import VueIcon from './Ui/VueIcon.vue';

export default {
    name: "VueLink",

    components: { VueIcon },

    props: {
        external: { type: Boolean, default: false },
        text: { type: String, default: "Link text" },
        icon: { type: String, default: null },
        href: { type: String, default: null },
        to: { type: Object, default: null },
        target: { type: String, default: "_self" },
        customClass: { type: String, default: null }
    },

    computed: {
        tag() {
            return this.external ? "a" : "router-link";
        }
    },
};

</script>

<template>

    <Component :class="['link', customClass]" :is="tag" :to="(!external ? to : null)"
        :href="(external ? href : null)" :title="text"
        :target="(external ? target : null)">
        <vue-icon v-if="icon" :icon="icon" /> {{ text }}
    </Component>

</template>

<style scoped>
.link {
    @apply cursor-pointer text-cyan-700 hover:opacity-70 duration-200 hover:duration-200 text-base font-normal;
}

.link>* {
    @apply pointer-events-none;
}
</style>