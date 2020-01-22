import HomeComponents from "./home-components";

/**
 * Responsible for assembling the DOM elements for the Home Page
 */
const HomePage = (function() {
  // Important!
  const app = document.getElementById("app");

  const constructHomePage = function(fitnessRoutines) {
    const frag = document.createDocumentFragment();

    const section = document.createElement("section");
    section.id = "home-page";

    section.appendChild(HomeComponents.getHomeNavbarFragment());
    section.appendChild(HomeComponents.getHomeTitleFragment());
    section.appendChild(HomeComponents.getHomeRoutinesFragment());
    section.appendChild(HomeComponents.getHomeFooterFragment());

    frag.appendChild(section);
    app.appendChild(frag);
  };

  return { constructHomePage };
})();

export default HomePage;
