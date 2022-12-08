<script>

import VueIcon from '../../Ui/VueIcon.vue';

export default {
    name: "VueCollapseToggler",

    components: { VueIcon },
    
    emits: {
        "hasClicked": null
    },
    
    props: {
        text: { type: String, default: "Toggler text" },
        icon: { type: String, default: null },
        hideArrow: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        light: { type: Boolean, default: false },
        transparent: { type: Boolean, default: false }
    },

    methods: {
        hasClicked(event) {
            this.$emit("hasClicked", event);
        }
    },
    
    computed: {
        contentShowed() {
            return this.$parent.show;
        },
        customColor() {
            return (this.dark ? "collapse-toggler-dark" : (this.light ? "collapse-toggler-light" : "collapse-toggler-light")) + (this.transparent ? " collapse-transparent" : "");
        }
    },
};

</script>

<template>
    <a @click="hasClicked" :class="[
        'collapse-toggler',
        customColor
    ]">
        <vue-icon v-if="icon" :icon="icon" />
        <span class="ml-2">{{ text }}</span>
        <vue-icon v-if="!hideArrow" icon="arrowRight"
            :class="[
                'ml-auto text-xl duration-300',
                {
                    'rotate-90': contentShowed
                }
            ]" />
    </a>
</template>

<style scoped>
.collapse-toggler {
    @apply flex items-center z-50 px-3 py-2 rounded cursor-pointer duration-200 font-medium hover:duration-200 hover:opacity-90;

    /* lg */
    @apply lg:px-4;
}

.collapse-toggler.active {
    @apply font-semibold opacity-90;
}

.collapse-toggler.collapse-toggler-light {
    @apply bg-slate-300 text-slate-600 dark:bg-slate-600 dark:text-slate-300;
}

.collapse-toggler.collapse-toggler-dark {
    @apply bg-slate-600 text-slate-300 dark:bg-slate-700;
}

.collapse-toggler.collapse-toggler-light.collapse-transparent,
.collapse-toggler.collapse-toggler-dark.collapse-transparent {
    @apply !bg-transparent;
}
</style>