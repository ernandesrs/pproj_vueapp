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
    }
};

</script>

<template>

    <a v-if="external" :class="[
        {
            'link': !customClass
        },
        customClass
    ]" :href="href" :title="text" :target="target">
        <vue-icon v-if="icon" :icon="icon" /> {{ text }}
    </a>
    <router-link v-else :class="[
        {
            'link': !customClass
        },
        customClass
    ]" :to="to" :title="text">
        <vue-icon v-if="icon" :icon="icon" /> {{ text }}
    </router-link>

</template>

<style scoped>
a {
    @apply cursor-pointer hover:opacity-90 duration-200 hover:duration-200 text-base font-normal;
}

.link {
    @apply text-cyan-700;
}

.link>* {
    @apply pointer-events-none;
}
</style>