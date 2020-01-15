import ExerciseFactory from './modules/exercise-factory';

/**
 * Main
 */
document.addEventListener("DOMContentLoaded", e => {
  let exercises = ExerciseFactory.seedExercises();
  let routines = ExerciseFactory.seedRoutines();

  console.log(exercises);
  console.log(routines);
});