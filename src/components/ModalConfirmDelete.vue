<template>
    <div v-if="isShow" class="noti-modal">
        <div class="container">
            <h3>Are you sure</h3>

            <!-- <button @click="deleteConfirm">Delete</button>
            <button @click="cancel">Cancel</button> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isShow: Boolean,
    },
    data() {
        return {};
    },
    computed: {},
    methods: {
        // deleteConfirm: function () {
        //     this.$emit("delete");
        // },
        // cancel: function () {
        //     this.$emit("cancel");
        // },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    background: green;
    height: 100px;
    widows: 100px;
}
</style>
