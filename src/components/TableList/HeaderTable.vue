<template>
    <tr>
        <th
            v-for="(item, index) in header"
            :key="index"
            :colspan="item.colspan"
        >
            {{ item.name }}
        </th>
    </tr>
</template>

<script>
export default {
    props: {
        header: Array,
    },
};
</script>

<style scoped>
th {
    border: 1px solid black;
    text-align: center;
    font-weight: 700;
    font-size: 1.1rem;
}
</style>