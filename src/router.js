import Vue from "vue";
import Router from "vue-router";
//import Home from "./views/Home.vue";
import Home from "./views/People.vue";
import Welcome from "./views/Welcome.vue";
import People from "./views/People.vue";
import Login from "./views/Login";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/People",
      name: "People",
      component: People
    },
    {
      path: "/Login",
      name: "Login",
      component: Login
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
