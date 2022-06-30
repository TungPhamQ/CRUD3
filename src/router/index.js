import Vue from "vue";
import VueRouter from "vue-router";
// import TableList from "../views/TableList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CrudApp",
    // component: TableList,
    component: () => import("../views/CrudApp.vue"),
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("../views/EditorView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
