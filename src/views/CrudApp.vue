<template>
    <div style="width: 100%" class="crud-app">
        <TableList :header="header" />
    </div>
</template>

<script>
import TableList from "../views/TableList.vue";

export default {
    name: "CrudApp",
    data() {
        return {
            header: [
                {
                    id: "id",
                    name: "ID",
                    colspan: 1,
                },
                {
                    id: "userId",
                    name: "UserId",
                    colspan: 1,
                },
                {
                    id: "title",
                    name: "Title",
                    colspan: 1,
                },
                {
                    id: "body",
                    name: "Body",
                    colspan: 1,
                },
            ],
        };
    },
    components: { TableList },
    props: {
        posts: Array,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.crud-app {
    background: rgb(255, 250, 250);
    /* background: #000; */
    height: 100vh;
}
</style>
