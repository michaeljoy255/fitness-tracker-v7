import HomePage from "../home/Home";
import Helpers from "../../helpers";

/**
 * Adds all event listeners to the delegated DOM element
 */
const RoutineListeners = (function() {
  const loadEventListenersOnElement = function(elementId) {
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
          Helpers.clearTimer();
          HomePage.constructHomePage();
        }
      }
    });
  };

  return { loadEventListenersOnElement };
})();

export default RoutineListeners;
