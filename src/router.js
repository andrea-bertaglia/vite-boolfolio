import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppAboutUs from "./pages/AppAboutUs.vue";
import AppProjects from "./pages/AppProjects.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

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
      component: AppAboutUs,
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProjectPage,
    },
    {
      path: "/not-found",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export { router };
