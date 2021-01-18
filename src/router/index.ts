import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Main from "@/components/main-page.vue";
import History from "@/components/history.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/history",
    name: "History",
    component: History,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
