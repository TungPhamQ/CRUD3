<template>
    <td>
        <b-button :variant="variant">{{ name }} </b-button>
    </td>
</template>

<script>
export default {
    props: {
        name: String,
        variant: null,
    },
};
</script>

<style>
</style>