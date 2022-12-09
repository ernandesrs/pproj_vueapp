<script>

import VueNavItem from './VueNavItem.vue';

export default {
    name: "VueNav",

    components: { VueNavItem },

    props: {
        items: { type: Array, default: [] },
        vertical: { type: Boolean, default: false },
        activable: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
    },
};

</script>

<template>

    <nav :class="[
        'nav flex',
        {
            'flex-col': vertical
        }
    ]">
        <slot />

        <vue-nav-item v-for="item in items" :key="item" :data="item"
            :activable="activable" :dark="dark" :vertical="vertical" />
    </nav>

</template>
