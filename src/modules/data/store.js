import FitnessDefaults from "./fitness-defaults";
import Exercise from "../../classes/exercise";
import Routine from "../../classes/routine";
import WeightDetails from "../../classes/weight-details";
import CardioDetails from "../../classes/cardio-details";

/**
 * Store is responsible for communicating with local storage and initializing
 * the State with exercises and routines. The initialization will use data
 * from local storage and fill in the rest with default fitness data.
 */
const Store = (function() {
  /**
   * Initializes an Exercise from the default data and any local storage data
   * @param {Object} exerciseDefault
   * @returns {Exercise}
   * @todo pull data from local storage!
   */
  const initExercise = function(exerciseDefault) {
    if (exerciseDefault.category === FitnessDefaults.Category.MISC) {
      return new Exercise({
        id: exerciseDefault.id,
        name: exerciseDefault.name,
        category: exerciseDefault.category,
        notes: exerciseDefault.notes,
        details: null
      });
    } else if (exerciseDefault.category === FitnessDefaults.Category.CARDIO) {
      return new Exercise({
        id: exerciseDefault.id,
        name: exerciseDefault.name,
        category: exerciseDefault.category,
        notes: exerciseDefault.notes,
        details: new CardioDetails() // @todo - pull data from local storage!
      });
    } else {
      return new Exercise({
        id: exerciseDefault.id,
        name: exerciseDefault.name,
        category: exerciseDefault.category,
        notes: exerciseDefault.notes,
        details: new WeightDetails() // @todo - pull data from local storage!
      });
    }
  };

  /**
   * Initializes a Routine from the default data and any local storage data
   * @param {Object} routineDefault
   * @returns {Routine}
   * @todo pull data from local storage!
   */
  const initRoutine = function(routineDefault) {
    return new Routine({
      id: routineDefault.id,
      name: routineDefault.name,
      exercise_ids: routineDefault.exercise_ids
    });
  };

  /**
   * Initializes all exercises
   * @returns {Array} of Exercises
   */
  const initAllExercises = function() {
    const exercises = [];

    Object.keys(FitnessDefaults.Exercise).map(key => {
      exercises.push(initExercise(FitnessDefaults.Exercise[key]));
    });

    return exercises;
  };

  /**
   * Initializes all routines
   * @returns {Array} of Routines
   */
  const initAllRoutines = function() {
    const routines = [];

    Object.keys(FitnessDefaults.Routine).map(key => {
      routines.push(initRoutine(FitnessDefaults.Routine[key]));
    });

    return routines;
  };

  return {
    initAllExercises,
    initAllRoutines
  };
})();

export default Store;
