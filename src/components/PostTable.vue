<template>
    <div class="table">
        <!-- <ModalConfirmDelete :isShow="isShow" @delete="deleteConfirm" /> -->
        <table>
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
// import ModalConfirmDelete from "./ModalConfirmDelete.vue";

export default {
    props: {
        header: Array,
    },
    data() {
        return {
            post: {},
            isShow: false,
        };
    },
    computed: {},
    methods: {
        deletePost: function (post) {
            this.$swal
                .fire({
                    title: "You want to delete post " + post.id + "?",
                    showCancelButton: true,
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        this.$store.dispatch("deletePost", post);
                        this.$swal.fire("Deleted", "", "success");
                    }
                });
            {
                // this.$store.dispatch("deletePost", post);
            }
        },

        goToDetail(post) {
            this.$router.push({ path: `/detail/${post.id}` });
        },
        // confirmDelete() {
        //     this.isShow = true;
        //     this.deleteConfirm();
        // },
        // deleteConfirm() {
        //     console.log(1);
        // },
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

table {
    height: 90vh;
}

tbody tr:hover {
    background: rgb(225, 225, 225);
    cursor: pointer;
    transition: 0.3s;
}
</style>
