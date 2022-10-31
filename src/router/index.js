import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsView.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../views/SuccessView.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/categories/:id",
      name: "category-items",
      component: () => import("../views/CategoriesItems.vue"),
    },
  ],
});

export default router;
