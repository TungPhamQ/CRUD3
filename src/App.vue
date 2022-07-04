<template>
    <div id="app">
        <nav class="nav-bar">
            <router-link to="/" style="text-decoration: none">
                <h5>Home</h5>
            </router-link>
            |
            <router-link style="text-decoration: none" to="/add-post">
                <h5 class="add-new-post">Add New Post</h5>
            </router-link>
        </nav>
        <router-view />
    </div>
</template>


<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            posts: [],
        };
    },
    methods: {},
    created() {
        this.$store.dispatch("getPosts");
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.nav-bar {
    display: block;
    text-align: center;
    margin: 20px;
    background: #fff;
}

h5 {
    display: inline;
    /* border: 1px solid #000; */
    background: rgb(0, 92, 132);
    color: #fff;
    padding: 10px 5px;
    border-radius: 4px;
}

.add-new-post {
    background: #198754;
}
</style>
