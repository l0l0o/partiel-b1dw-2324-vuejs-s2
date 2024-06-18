import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form.vue";
import EventList from "../views/EventList.vue";
import ChooseSession from "../views/ChooseSession.vue";
import Recap from "../views/Recap.vue";

const routes = [
  { path: "/", redirect: "/form" },
  { path: "/form", name: "Form", component: Form },
  { path: "/eventlist", name: "EventList", component: EventList },
  { path: "/choosesession", name: "ChooseSession", component: ChooseSession },
  { path: "/recap", name: "Recap", component: Recap },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
