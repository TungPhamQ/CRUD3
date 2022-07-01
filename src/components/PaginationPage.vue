<template>
    <div class="pagination">
        <div class="pagination-row">
            <span v-for="(item, index) in new Array(10)" :key="index">
                <button
                    :class="[
                        'pagination-button',
                        currentPage == index + 1 ? 'active' : '',
                    ]"
                    @click="panigation(index + 1)"
                >
                    {{ index + 1 }}
                </button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            postPerPage: 10,
            currentPage: 1,
            postsOnPage: [],
        };
    },
    methods: {
        panigation: function (index) {
            this.currentPage = index;
            this.postOnPage = this.$store.state.posts.slice(
                this.startPost,
                this.endPost
            );
            this.$store.commit("PAGE_PANIGATION", this.postOnPage);
        },
    },
    computed: {
        startPost() {
            const startPost = (this.currentPage - 1) * this.postPerPage;
            return startPost;
        },
        endPost() {
            const endPost = this.startPost + this.postPerPage;
            return endPost;
        },
    },
    beforeMount() {
        this.panigation(this.currentPage);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination {
    display: block;
    text-align: center;
}
.pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    background: #fff;
    border: 1px solid #6d6d6d;
}

.pagination-button:hover {
    color: #fff;
    background: rgb(156, 156, 156);
    transition: 0.2s;
}

.active {
    border: 2px solid rgb(39, 107, 255);
}
</style>
