import State from "./modules/data/state";
import Helpers from "./modules/helpers";
import HomePage from "./modules/pages/home/home-page";

//import "./styles.scss";

/**
 * Main App
 */
document.addEventListener("DOMContentLoaded", e => {
  HomePage.constructHomePage();
});
