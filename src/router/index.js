import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "../components/Nav.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";
import Radio from "../views/Radio.vue";
import Shop from "../views/Shop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/radio",
    name: "Radio",
    component: Radio,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
