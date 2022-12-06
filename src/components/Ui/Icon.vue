<script>

export default {
    props: {
        icon: { type: String, default: "app" }
    }
};

</script>

<template>
    <span :class="['icon', $helpers.icon.get(icon)]"></span>
</template>
