import HomeComponents from "./home-components";
import HomeListeners from "./home-listeners";

/**
 * Responsible for assembling the DOM elements for the Home Page
 */
const HomePage = (function() {
  const constructHomePage = function() {
    const app = document.getElementById("app");
    const frag = document.createDocumentFragment();

    const homePage = document.createElement("section");
    homePage.id = "home-page";

    homePage.appendChild(HomeComponents.getHomeNavbarFragment());
    homePage.appendChild(HomeComponents.getHomeTitleFragment());
    homePage.appendChild(HomeComponents.getHomeRoutinesFragment());
    homePage.appendChild(HomeComponents.getHomeFooterFragment());

    frag.appendChild(homePage);

    // Clear App then attach Home Page
    document.getElementById("app").innerHTML = "";
    app.appendChild(frag);

    // Load Home Page event listeners
    HomeListeners.loadHomeEventListenersOnElement(homePage.id);
  };

  return { constructHomePage };
})();

export default HomePage;
