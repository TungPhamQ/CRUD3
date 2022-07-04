<template>
    <td>
        <b-button class="btn" :variant="variant">{{ name }} </b-button>
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
.btn {
    color: #fff;
}
</style>