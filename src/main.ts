import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFaucet,
  faChild,
  faTint,
  faWeightHanging,
  faGraduationCap,
  faStethoscope,
  faTractor,
  faUsers,
  faHotel,
  faMapMarkedAlt,
  faCogs,
  faVial,
  faIdCard,
  faX,
  faFileArrowDown,
  faUtensils,
  faBook,
  faCarSide,
  faBuilding,
  faMapMarkerAlt,
  faPhoneAlt,
  faPeopleArrows,
  faHeart,
  faGlobeAfrica,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import router from "./router";

import "./index.css";
// import "./assets/main.css";

library.add(
  faFaucet,
  faChild,
  faTint,
  faWeightHanging,
  faGraduationCap,
  faStethoscope,
  faTractor,
  faUsers,
  faHotel,
  faMapMarkedAlt,
  faCogs,
  faVial,
  faIdCard,
  faX,
  faFileArrowDown,
  faUtensils,
  faBook,
  faCarSide,
  faBuilding,
  faMapMarkerAlt,
  faPhoneAlt,
  faPeopleArrows,
  faHeart,
  faGlobeAfrica,
  faHandshake,
  faInstagram,
  faFacebook,
  faYoutube
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
