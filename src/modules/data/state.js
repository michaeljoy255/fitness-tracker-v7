import Store from "./store";

/**
 * State is responsible for keeping app level data ready and available.
 */
const State = (function() {
  // State Properties
  let loadedExercises = Store.initAllExercises();
  let loadedRoutines = Store.initAllRoutines();
  let currentExercises = [];
  let currentRoutine = {};
  let routineStartTime = null;

  const getLoadedExercises = function() {
    return loadedExercises;
  };

  const getLoadedRoutines = function() {
    return loadedRoutines;
  };

  return {
    getLoadedExercises,
    getLoadedRoutines
  };
})();

export default State;
