import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";
import Radio from "../views/Radio.vue";
import Shop from "../views/Shop.vue";
import Impressum from "../views/Impressum.vue";
import Datenschutz from "../views/Datenschutz.vue";

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
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    component: Datenschutz,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
