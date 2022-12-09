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
        activable: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        vertical: { type: Boolean, default: false },
    },
};

</script>

<template>

    <vue-link
        :custom-class="`nav-item${activable ? ' nav-item-activable' : ''}${dark ? ' nav-item-dark' : ' nav-item-light'}${vertical ? ' nav-vertical' : ''}`"
        :text="(text ?? data.text)" :icon="(icon ?? data.icon)"
        :href="(href ?? data.href)" :target="(target ?? data.target)" />

</template>

<style>
.nav-item {
    @apply py-2 px-4;
}

.nav-item.nav-item-light {
    @apply text-slate-600 dark:text-slate-200;
}

.nav-item.nav-item-dark {
    @apply text-slate-200;
}

.nav-item-activable.router-link-exact-active {
    @apply text-slate-400 dark:text-opacity-70;
}

.nav-item.nav-item-activable.nav-vertical.router-link-exact-active {
    @apply ml-4;
}
</style>