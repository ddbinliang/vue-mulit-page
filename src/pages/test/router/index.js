import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TestHome",
    component: () =>
      import(/* webpackChunkName: "Test" */ "@/pages/test/views/home.vue"),
  },
  {
    path: "/test",
    name: "TestPage",
    component: () =>
      import(/* webpackChunkName: "Test" */ "@/pages/test/views/test.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: `/test/`, // warn: 注意设置的路由base
  routes,
});

export default router;
