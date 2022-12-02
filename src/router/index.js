import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/Home.vue";
import ChurchPage from "../pages/Church.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/church",
    name: "Church",
    component: ChurchPage,
    meta: {
      requiresAuth: false
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
