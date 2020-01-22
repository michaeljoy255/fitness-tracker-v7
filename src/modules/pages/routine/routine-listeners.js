import State from "../../data/state";

/**
 * Adds all event listeners to the delegated DOM element
 */
const RoutineListeners = (function() {
  // Important!
  const routinePage = document.getElementById("routine-section");

  const loadRoutineEventListeners = function() {
    // Results button
    routinePage.addEventListener("mousedown", e => {
      if (e.target.id === "results-btn") {
        //storeRoutineResults();
      }
    });

    // Cancel button
    routinePage.addEventListener("mousedown", e => {
      if (e.target.id === "cancel-btn") {
        if (confirm("Cancel this routine?")) {
          //RoutineFunctions.stopRoutineTimer.call(window);
          //document.getElementById("routine-page").remove();
          //HomeFunctions.constructHomePage(fitnessData.routines);
        }
      }
    });
  };

  return { loadRoutineEventListeners };
})();

export default RoutineListeners;
