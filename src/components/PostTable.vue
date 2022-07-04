<template>
    <div class="table">
        <table style="width: 100%">
            <thead>
                <HeaderTable :header="header" />
            </thead>
            <tbody>
                <tr v-for="post in $store.state.postsOnPage" :key="post.id">
                    <ListPost
                        v-for="(item, index) in header"
                        :key="index"
                        :post="post"
                        :item="item"
                        @click.native="goToDetail(post)"
                    />

                    <FunctionButton
                        name="Edit"
                        variant="info"
                        @click.native="goToDetail(post)"
                    />

                    <FunctionButton
                        name="X"
                        variant="danger"
                        @click.native="deletePost(post)"
                    />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import HeaderTable from "../components/TableList/HeaderTable.vue";
import ListPost from "../components/TableList/ListPost.vue";
import FunctionButton from "../components/TableList/FunctionButton.vue";

export default {
    props: {
        header: Array,
    },
    data() {
        return {
            post: {},
        };
    },
    computed: {},
    methods: {
        deletePost: function (post) {
            if (confirm("YOU WANT TO DELETE POST " + post.id)) {
                this.$store.dispatch("deletePost", post);
            }
        },

        goToDetail(post) {
            this.$router.push({ path: `/detail/${post.id}` });
        },
    },
    components: { HeaderTable, ListPost, FunctionButton },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
td {
    border: 1px solid black;
    text-align: center;
}

.table {
    background: #fff;
    width: 80%;
    margin: auto;
}

tbody tr {
    height: 90px;
}

tbody tr:hover {
    background: rgb(225, 225, 225);
    cursor: pointer;
    transition: 0.3s;
}
</style>
