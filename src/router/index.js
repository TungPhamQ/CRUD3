import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CrudApp",
    component: () => import("../views/CrudApp.vue"),
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: () => import("../views/AddPost.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/PostDetail.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
