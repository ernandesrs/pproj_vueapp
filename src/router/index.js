import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ButtonsView from "../views/ButtonsView.vue";
import CollapsesView from "../views/CollapsesView.vue";
import ModalsView from "../views/ModalsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/buttons",
      name: "buttons",
      component: ButtonsView,
    },
    {
      path: "/collapses",
      name: "collapses",
      component: CollapsesView,
    },
    {
      path: "/modals",
      name: "modals",
      component: ModalsView,
    }
  ],
});

export default router;
