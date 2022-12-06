<script>

export default {
    name: "Icon",

    props: {
        icon: { type: String, default: "app" }
    }
};

</script>

<template>
    <span :class="['icon', $helpers.icon.get(icon)]"></span>
</template>

<style scoped>
.icon {
    @apply inline-block;
}
</style>