<template>
    <div style="width: 100%" class="crud-app">
        <PaginationPage />
        <PostTable :header="header" />
    </div>
</template>

<script>
import PostTable from "../components/PostTable.vue";
import PaginationPage from "../components/PaginationPage.vue";

export default {
    name: "CrudApp",
    data() {
        return {
            header: [
                {
                    id: "id",
                    name: "ID",
                    colspan: 1,
                    width: 5,
                },
                {
                    id: "userId",
                    name: "UserId",
                    colspan: 1,
                    width: 5,
                },
                {
                    id: "title",
                    name: "Title",
                    colspan: 1,
                    width: 30,
                },
                {
                    id: "body",
                    name: "Body",
                    colspan: 1,
                    width: 60,
                },
            ],
        };
    },
    components: { PostTable, PaginationPage },
    props: {
        posts: Array,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.crud-app {
    background: rgb(255, 250, 250);
    height: 100vh;
}
</style>
