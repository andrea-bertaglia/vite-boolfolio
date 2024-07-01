const { createRouter, createWebHistory } = require("vue-router");
import AppHome from "./pages/AppHome.vue";
import AboutUs from "./pages/AppAboutUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/about-us",
      name: "about-us",
      component: AboutUs,
    },
  ],
});

export { router };
