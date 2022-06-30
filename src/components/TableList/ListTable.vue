<template>
    <td class="text-content">{{ post[item.id] }}</td>
</template>

<script>
export default {
    props: {
        post: Object,
        item: Object,
    },
};
</script>

<style>
</style>