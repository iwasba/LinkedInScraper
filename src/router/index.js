import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/fetching",
    name: "fetching",
    component: () =>
      import(/* webpackChunkName: "fetching" */ "./views/Fetching.vue"),
  },
  {
    path: "/download",
    name: "download",
    component: () =>
      import(/* webpackChunkName: "download" */ "./views/Download.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
