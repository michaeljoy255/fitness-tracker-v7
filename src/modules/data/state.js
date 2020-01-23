import Store from "./store";
import Helpers from "../helpers";

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

  const getLoadedRoutineById = function(routineId) {
    return state.loadedRoutines.find(routine => routine.id === routineId);
  };

  const setRoutineState = function(routineId) {
    // Sets the start time for the new routine
    state.routineStartTime = new Date().getTime();

    // Sets current routine state to the new routine and sets the current date
    state.currentRoutine = {
      ...state.loadedRoutines.find(routine => routine.id === routineId),
      routine_date: Helpers.getDateString()
    };

    // Sets the current exercises state to the ones from the new routine
    state.currentExercises = [
      ...state.currentRoutine.exercise_ids.map(curExerId => {
        return state.loadedExercises.find(loadedExercise => {
          if (loadedExercise.id === curExerId) {
            return loadedExercise;
          }
        });
      })
    ];
  };

  const DEBUG_STATE = function() {
    console.log(state);
  };

  return {
    DEBUG_STATE,
    getLoadedExercises,
    getLoadedRoutines,
    getLoadedRoutineById,
    getCurrentExercises,
    getCurrentRoutine,
    getRoutineStartTime,
    setRoutineState
  };
})();

export default State;
