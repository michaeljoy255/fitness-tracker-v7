  import RoutineFunctions from './routine-functions';
  import HomeFunctions from './home-functions';
  
  const EventListeners = (function() {
    /**
     * Adds delegated event listeners to the #app
     * @param user - Object
     */
    const loadEventListeners = function(fitnessData) {
      const app = document.getElementById("app");
  
      // Routine buttons
      app.addEventListener("mousedown", e => {
        const routineIds = fitnessData.routines.map(routine => routine.id);
  
        // Start routine with Id of clicked element if its in the routines array
        if (routineIds.includes((e.target).id)) {
          RoutineFunctions.constructRoutinePage((e.target).id, fitnessData);
        }
      });
  
      // Results button
      app.addEventListener("mousedown", e => {
        if ((e.target).id === "results-btn") {
          storeRoutineResults();
        }
      });
  
      // Cancel button
      app.addEventListener("mousedown", e => {
        if ((e.target).id === "cancel-btn") {
          // Confirm box
          if (confirm("Cancel this routine?")) {
            RoutineFunctions.stopRoutineTimer.call(window);
            document.getElementById("routine-page").remove();
            HomeFunctions.constructHomePage(fitnessData.routines);
          }
        }
      });
    }

    return { loadEventListeners };
  })();
  
  export default EventListeners;