import { createRouter, createWebHistory } from "vue-router";
import MainEvents from "../pages/MainEvents.vue";
import DetailEvents from "../pages/DetailEvents.vue";
import eventsCreate from "../pages/eventsCreate.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/events", component: MainEvents },
    { path: "/events", component: MainEvents },
    { path: "/events/:id", component: DetailEvents, props: true },
    { path: "/createForm", component: eventsCreate },
  ],
});

export default router;
