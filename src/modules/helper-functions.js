const HelperFunctions = (function() {
  /**
   * Returns date string formatted as MM/DD/YYYY
   * @returns string
   */
  const getDateString = function() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "/" + day + "/" + year;
  }

  /**
   * Adds delegated event listeners to the #app
   * @param user - Object
   */
  const loadEventListeners = function(routinesArr) {
    const app = document.getElementById("app");

    // Routine buttons
    app.addEventListener("mousedown", e => {
      const routineIds = [];

      // Load routine Ids into an array for comparision
      routinesArr.forEach(routine => {
        routineIds.push(routine.id);
      });

      // Start routine with Id of clicked element if its in the routines array
      if (routineIds.includes((e.target).id)) {
        startRoutineById((e.target).id);
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
        cancelRoutine(routinesArr);
      }
    });
  }

  function startRoutineById(routineId) {
    constructRoutinePage(routineId);
  }

  function cancelRoutine(routinesArr) {
    if (confirm("Cancel this routine?")) {
      stopRoutineTimer.call(window);
      document.getElementById("routine-page").remove();
      constructHomePage(routinesArr);
    }
  }

  // Global - not ideal
  var timeId;

  // Tracks time for current activity
  const routineTimer = function(startTime) {
    const now = new Date().getTime();
    const timeDiff = now - startTime;
    const secsPerDay = 60 * 60 * 1000 * 24;
    const secsPerHour = 60 * 60 * 1000;

    const hours = Math.floor(((timeDiff % secsPerDay) / secsPerHour) * 1);
    const mins = Math.floor(
      (((timeDiff % secsPerDay) % secsPerHour) / (60 * 1000)) * 1
    );
    const secs = Math.floor(
      ((((timeDiff % secsPerDay) % secsPerHour) % (60 * 1000)) / 1000) * 1
    );

    const sHours = hours.toString().padStart(2, "0");
    const sMins = mins.toString().padStart(2, "0");
    const sSecs = secs.toString().padStart(2, "0");

    document.querySelector(
      "#running-timer"
    ).innerHTML = `${sHours}:${sMins}:${sSecs}`;

    clearTimeout(timeId);

    timeId = setTimeout(() => (this.routineTimer(startTime), 1000));
  }

  function stopRoutineTimer() {
    clearTimeout(timeId);
  }

  function storeRoutineResults() {
    // This should tigger a save of unique data to local storage
  }

  return {
    getDateString,
    loadEventListeners,
    routineTimer
  }
})();

export default HelperFunctions;