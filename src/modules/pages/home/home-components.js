import State from "../../data/state";

/**
 * Component fragments for the Home Page
 */
const HomeComponents = (function() {
  /**
   * Top navbar
   */
  const getHomeNavbarFragment = function() {
    const frag = document.createDocumentFragment();

    const navbar = document.createElement("navbar");
    navbar.className = "home-navbar";
    navbar.innerHTML = "<p>Navbar</p>";

    frag.appendChild(navbar);
    return frag;
  };

  /**
   * Title div
   */
  const getHomeTitleFragment = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "home-title";
    div.innerHTML = "<h1>Fitness Linear Progression</h1>";

    frag.appendChild(div);
    return frag;
  };

  /**
   * Routine buttons
   */
  const getHomeRoutinesFragment = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "routines";

    State.getLoadedRoutines().forEach(routine => {
      const routineBtn = document.createElement("button");
      routineBtn.id = routine.id;
      routineBtn.textContent = routine.name;
      routineBtn.className = "routine-btn";
      div.appendChild(routineBtn);
    });

    frag.appendChild(div);
    return frag;
  };

  /**
   * Footer byline (may get moved to an about page later)
   */
  const getHomeFooterFragment = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "home-footer";
    div.innerHTML = "<p>Fitness Linear Progression ~ Michael J.</p>";

    frag.appendChild(div);
    return frag;
  };

  return {
    getHomeNavbarFragment,
    getHomeTitleFragment,
    getHomeRoutinesFragment,
    getHomeFooterFragment
  };
})();

export default HomeComponents;
