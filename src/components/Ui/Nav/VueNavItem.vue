<script>

import VueLink from '../../VueLink.vue';

export default {
    name: "VueNavItem",

    components: { VueLink },

    props: {
        data: {
            type: Object, default: {
                text: "Nav item",
                href: {},
                icon: null,
                target: "_self"
            }
        },
        text: { type: String, default: null },
        icon: { type: String, default: null },
        href: { type: [String, Object], default: null },
        target: { type: String, default: null },
        activable: { type: Boolean, default: false }
    },
};

</script>

<template>

    <vue-link :custom-class="`nav-item${activable ? ' nav-item-activable' : ''}`"
        :text="(text ?? data.text)" :icon="(icon ?? data.icon)"
        :href="(href ?? data.href)" :target="(target ?? data.target)" />

</template>

<style>
.nav-item {
    @apply text-red-500;
}

.nav-item-activable.router-link-exact-active {
    @apply text-yellow-500;
}
</style>