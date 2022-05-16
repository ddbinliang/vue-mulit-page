import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "adminHome",
    component: () =>
      import(/* webpackChunkName: "Test" */ "@/pages/admin/views/home.vue"),
  },
  {
    path: "/about",
    name: "adminAbout",
    component: () =>
      import(/* webpackChunkName: "Test" */ "@/pages/admin/views/about.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: `/admin/`, // warn: 注意设置的路由base
  routes,
});

export default router;
