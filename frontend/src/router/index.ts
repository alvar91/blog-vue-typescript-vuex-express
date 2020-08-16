import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import LoginPage from "../views/LoginPage.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Article from "../views/ArticlePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: "/post/:id",
    name: "Article",
    component: Article,
    meta: { requiresAuth: true }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { requiresAuth: true }
  },
  {
    path: "*",
    name: "404",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const authUser = JSON.parse(
      window.localStorage.getItem("currentUser") || "{}"
    );
    if (authUser && authUser.accessToken) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
