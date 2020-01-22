import State from "../../data/state";

/**
 * Adds all event listeners to the delegated DOM element
 */
const HomeListeners = (function() {
  // Important!
  const homePage = document.getElementById("home-section");

  const loadHomeEventListeners = function() {
    const routineIds = State.getLoadedRoutines().map(routine => routine.id);

    // Routine buttons
    homePage.addEventListener("mousedown", e => {
      // Start routine with Id of clicked element if its in the routines array
      if (routineIds.includes(e.target.id)) {
        //RoutineFunctions.constructRoutinePage(e.target.id, fitnessData);
      }
    });
  };

  return { loadHomeEventListeners };
})();

export default HomeListeners;
