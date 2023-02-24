import Vue from "vue";
import Router from "vue-router";
import HomePage from "../pages/Home.vue";
import ChurchPage from "../pages/Church.vue";
import ChurchDetailPage from "../pages/ChurchDetail.vue";
import DetailJakartaPage from "../pages/DetailJakarta.vue";
import DetailPakuPage from "../pages/DetailPaku.vue";
import NewsPage from "../pages/News.vue";
import NewsDetailPage from "../pages/NewsDetail.vue";
import DownloadPage from "../pages/Download.vue";
import DownloadDetailPage from "../pages/DownloadDetail.vue";
import AboutPage from "../pages/About.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/church",
    name: "Church",
    component: ChurchPage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/church/detail",
    name: "Church Detail",
    component: ChurchDetailPage,
    meta: {
      requiresAuth: false,
      hideNavbar: false,
      hideFooter: false
    }
  },
  {
    path: "/jakarta/",
    name: "Church Detail",
    component: DetailJakartaPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFJak: true,
      showJak:true
    }
  },
  {
    path: "/paku/",
    name: "Church Detail",
    component: DetailPakuPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/church/news/",
    name: "Church News ",
    component: NewsPage,
    meta: {
      requiresAuth: false,
      showLocal: true
    }
  },
  {
    path: "/church/news/detail",
    name: "Church News Detail",
    component: NewsDetailPage,
    meta: {
      requiresAuth: false,
      showLocal: true
    }
  },
  {
    path: "/church/download/",
    name: "Church Download",
    component: DownloadPage,
    meta: {
      requiresAuth: false,
      showLocal: true
    }
  },
  {
    path: "/church/download/detail",
    name: "Church Download Detail",
    component: DownloadDetailPage,
    meta: {
      requiresAuth: false,
      showLocal: true
    }
  },
  {
    path: "/paku/news/",
    name: "Church News ",
    component: NewsPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/paku/news/detail",
    name: "Church News Detail",
    component: NewsDetailPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/paku/download/",
    name: "Church News Detail",
    component: DownloadPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/paku/download/detail",
    name: "Church Downlaod Detail",
    component: DownloadDetailPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/paku/congregation",
    name: "Church About",
    component: AboutPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/paku/about",
    name: "Church About",
    component: AboutPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/paku/church",
    name: "Church Church",
    component: ChurchPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFPaku: true,
      showPaku:true
    }
  },
  {
    path: "/news",
    name: "News",
    component: NewsPage,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/news/detail',
    name: "News Detail",
    component: NewsDetailPage,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: "/download",
    name: "Download",
    component: DownloadPage,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/download/detail',
    name: "Download Detail",
    component: DownloadDetailPage,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/jakarta/news/",
    name: "Church News ",
    component: NewsPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFJak: true,
      showJak:true
    }
  },
  {
    path: "/jakarta/news/detail",
    name: "Church News Detail",
    component: NewsDetailPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFJak: true,
      showJak:true
    }
  },
  {
    path: "/jakarta/download/",
    name: "Church News Detail",
    component: DownloadPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFJak: true,
      showJak:true
    }
  },
  {
    path: "/jakarta/download/detail",
    name: "Church Downlaod Detail",
    component: DownloadDetailPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFJak: true,
      showJak:true
    }
  },
  {
    path: "/jakarta/about",
    name: "Church About",
    component: AboutPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFJak: true,
      showJak:true
    }
  },
  {
    path: "/jakarta/church",
    name: "Church About",
    component: ChurchPage,
    meta: {
      requiresAuth: false,
      hideNavbar: true,
      hideFooter: true,
      showFJak: true,
      showJak:true
    }
  },
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  // Redirect if fullPath begins with a hash (ignore hashes later in path)
  if (to.fullPath.substr(0,2) === "/#") {
      window.scrollTo(0, 0);
      const path = to.fullPath.substr(2);
      next(path);
      return;
  }
  next();
});