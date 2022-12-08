<script>

export default {
    name: "VueCollapseContent",

    props: {
        show: { type: Boolean, default: false }
    },
};

</script>

<template>
    <Transition name="drop">
        <div v-if="show" class="collapse-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi est quo quae
            distinctio, facere fuga eos incidunt quibusdam itaque! Dignissimos, aut
            nesciunt! Assumenda voluptatibus voluptate impedit pariatur ducimus deleniti?
            Recusandae?
        </div>
    </Transition>
</template>

<style scoped>
.collapse-content {
    @apply z-0 px-3 py-2;

    /* lg */
    @apply lg:px-4;
}

/**
 * DROP TRANSITION
 */
.drop-enter-active {
    @apply duration-500 ease-in-out;
}

.drop-leave-active {
    @apply duration-300 ease-out;
}

.drop-enter-from,
.drop-leave-to {
    @apply -translate-y-5 opacity-0;
}

.drop-leave-from,
.drop-enter-to {
    @apply translate-y-0 opacity-100;
}
</style>