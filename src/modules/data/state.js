import Store from "./store";

/**
 * State is responsible for keeping app level data ready and available.
 */
const State = (function() {
  const state = {
    loadedExercises: Store.initAllExercises(),
    loadedRoutines: Store.initAllRoutines(),
    currentExercises: null,
    currentRoutine: null,
    routineStartTime: null
  };

  const getLoadedExercises = function() {
    return state.loadedExercises;
  };

  const getLoadedRoutines = function() {
    return state.loadedRoutines;
  };

  const getCurrentExercises = function() {
    return state.currentExercises;
  };

  const getCurrentRoutine = function() {
    return state.currentRoutine;
  };

  const getRoutineStartTime = function() {
    return state.routineStartTime;
  };

  const setRoutineState = function(routineId) {
    // Sets the start time for the new routine
    state.routineStartTime = new Date().getTime();

    // Sets the current routine state data to the new routine
    state.currentRoutine = state.loadedRoutines.find(
      routine => routine.id === routineId
    );

    // Sets the current exercises state data to the ones from the new routine
    state.currentExercises = state.currentRoutine.exercise_ids.map(
      curExerId => {
        return state.loadedExercises.find(loadedExercise => {
          if (loadedExercise.id === curExerId) {
            return loadedExercise;
          }
        });
      }
    );

    console.log(state); // TEMP - Shows changes to the state
  };

  return {
    getLoadedExercises,
    getLoadedRoutines,
    getCurrentExercises,
    getCurrentRoutine,
    getRoutineStartTime,
    setRoutineState
  };
})();

export default State;
