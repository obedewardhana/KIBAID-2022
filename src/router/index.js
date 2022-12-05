import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/Home.vue";
import ChurchPage from "../pages/Church.vue";
import NewsPage from "../pages/News.vue";
import AboutPage from "../pages/About.vue";

Vue.use(Router);

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
  {
    path: "/news",
    name: "News",
    component: NewsPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      requiresAuth: false
    }
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
