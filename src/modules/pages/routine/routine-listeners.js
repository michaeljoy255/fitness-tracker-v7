import State from "../../data/state";
import HomePage from "../home/home-page";

/**
 * Adds all event listeners to the delegated DOM element
 */
const RoutineListeners = (function() {
  const loadRoutineEventListenersOnElement = function(elementId) {
    const routinePage = document.getElementById(elementId);

    // Results button
    routinePage.addEventListener("mousedown", e => {
      if (e.target.id === "finish-btn") {
        //storeRoutineResults(); // ???
      }
    });

    // Cancel button
    routinePage.addEventListener("mousedown", e => {
      if (e.target.id === "cancel-btn") {
        if (confirm("Cancel this routine?")) {
          //RoutineFunctions.stopRoutineTimer.call(window); // @todo - TIMER!!!
          document.getElementById("app").innerHTML = "";
          HomePage.constructHomePage();
        }
      }
    });
  };

  return { loadRoutineEventListenersOnElement };
})();

export default RoutineListeners;
