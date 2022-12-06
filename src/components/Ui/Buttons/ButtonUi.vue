<script>

import Icon from "../Icon.vue";

export default {
    name: "ButtonUi",

    components: { Icon },

    props: {
        as: { type: String, default: "button" },
        text: { type: String, default: null },
        icon: { type: String, default: null },
        iconEnd: { type: Boolean, default: false },
        href: { type: String, default: null },
        type: { type: String, default: "button" },
        variant: { type: String, default: null },
        size: { type: String, default: null },
        full: { type: Boolean, default: false },
        noRounded: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    },

    computed: {
        buttonTag() {
            return ["button", "link", "a", "div", "span"].includes(this.as) ? this.as : "button";
        }
    },
};

</script>

<template>
    <Component :is="buttonTag" :class="[
        'button',
        {
            'button-full': this.full,
            'button-link': this.as === 'a' && !variant,
        },
        'button-' + this.variant,
        {
            'rounded': !this.noRounded
        },
        this.size ? 'button-' + this.size : ''
    ]" :disabled="disabled">
        <Icon v-if="(icon && !iconEnd)" :icon="icon" />
        <span v-if="text" :class="[
            'text',
            {
                'ml-1': icon && !iconEnd,
                'mr-1': icon && iconEnd,
            }
        ]">
            {{ text }}
        </span>
        <Icon v-if="(icon && iconEnd)" :icon="icon" />
    </Component>
</template>

<style scoped>
.button {
    @apply inline-flex flex-wrap items-center justify-center text-center py-1 px-4 cursor-pointer text-slate-500 dark:text-slate-300 hover:bg-opacity-90 hover:text-opacity-95 duration-200 hover:duration-200 disabled:bg-opacity-80 disabled:cursor-not-allowed focus:opacity-80;
}

.button-full {
    @apply w-full;
}

.button>* {
    @apply pointer-events-none align-middle;
}

.button.button-link {
    @apply bg-transparent;
}

.button-dark {
    @apply bg-slate-600 text-slate-200 dark:bg-slate-700;
}

.button-light {
    @apply bg-slate-300 text-slate-500 dark:bg-slate-600 dark:text-slate-200;
}

.button-success {
    @apply bg-green-700 text-slate-200 dark:bg-green-800;
}

.button-info {
    @apply bg-cyan-700 text-slate-200 dark:bg-cyan-800;
}

.button-warning {
    @apply bg-yellow-700 text-slate-200 dark:bg-yellow-800;
}

.button-danger {
    @apply bg-red-500 text-slate-200 dark:bg-red-700;
}

.button-sm {
    @apply text-sm px-3;
}

.button-lg {
    @apply text-lg px-5;
}
</style>