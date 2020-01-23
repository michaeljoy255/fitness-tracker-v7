import RoutineComponents from "./routine-components";
import RoutineListeners from "./routine-listeners";

/**
 * Responsible for assembling the DOM elements for the Routine Page
 */
const RoutinePage = (function() {
  const constructRoutinePage = function() {
    const app = document.getElementById("app");
    const frag = document.createDocumentFragment();

    const routinePage = document.createElement("section");
    routinePage.id = "routine-page";

    routinePage.appendChild(RoutineComponents.getRoutineNavbarFragment());
    routinePage.appendChild(RoutineComponents.getRoutineTitleFragment());
    routinePage.appendChild(RoutineComponents.getRoutineExercisesFragment());
    routinePage.appendChild(RoutineComponents.getRoutineFooterFragment());

    frag.appendChild(routinePage);

    // Clear App then attach Routine Page
    document.getElementById("app").innerHTML = "";
    app.appendChild(frag);

    // Load Routine Page event listeners
    RoutineListeners.loadRoutineEventListenersOnElement(routinePage.id);
  };

  return { constructRoutinePage };
})();

export default RoutinePage;
