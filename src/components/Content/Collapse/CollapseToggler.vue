<script>

export default {
    name: "CollapseToggler",

    emits: {
        "hasClicked": null
    },

    props: {
        text: { type: String, default: "Toggler text" },
        icon: { type: String, default: null },
        hideArrow: { type: Boolean, default: false },
        dark: { type: Boolean, default: false },
        light: { type: Boolean, default: false },
        primaryColorClass: { type: String, default: "slate-600" },
        secondaryColorClass: { type: String, default: "slate-300" },
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
            return this.dark ? 'collapse-toggler-dark' : (this.light ? 'collapse-toggler-light' : 'collapse-toggler-light');
        }
    }
};

</script>

<template>
    <a @click="hasClicked" :class="[
        'collapse-toggler',
        customColor
    ]">
        <span v-if="icon" :class="[
            $helpers.icon.get(icon)
        ]"></span>
        <span class="ml-2">{{ text }}</span>
        <span v-if="!hideArrow" class="ml-auto text-xl"
            :class="$helpers.icon.get(contentShowed ? 'arrowDown' : 'arrowRight')"></span>
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
    @apply bg-slate-300 text-slate-600;
}

.collapse-toggler.collapse-toggler-dark {
    @apply bg-slate-600 text-slate-300;
}
</style>