  import CONSTANTS from './constants';
  import Exercise from '../classes/exercise';
  import Routine from '../classes/routine';
  import WeightDetails from '../classes/weight-details';
  import CardioDetails from '../classes/cardio-details';
  
  const DataSeeder = (function() {
    const createExercise = function(exerciseConstant) {
      if (exerciseConstant.category === CONSTANTS.Category.MISC) {
        return new Exercise({
          id: exerciseConstant.id,
          name: exerciseConstant.name,
          category: exerciseConstant.category,
          notes: exerciseConstant.notes,
          details: null
        });
      } else if (exerciseConstant.category === CONSTANTS.Category.CARDIO) {
        return new Exercise({
          id: exerciseConstant.id,
          name: exerciseConstant.name,
          category: exerciseConstant.category,
          notes: exerciseConstant.notes,
          details: new CardioDetails()
        });
      } else {
        return new Exercise({
          id: exerciseConstant.id,
          name: exerciseConstant.name,
          category: exerciseConstant.category,
          notes: exerciseConstant.notes,
          details: new WeightDetails()
        });
      }
    };

    const createRoutine = function(routineConstant) {
      return new Routine({
        id: routineConstant.id,
        name: routineConstant.name,
        exercise_ids: routineConstant.exercise_ids
      });
    };

    return {
      seedExercises: function() {
        const exercises = [];

        Object.keys(CONSTANTS.Exercise).forEach(key => {
          exercises.push(createExercise(CONSTANTS.Exercise[key]));
        });
  
        return exercises;
      },
      seedRoutines: function() {
        const routines = [];

        Object.keys(CONSTANTS.Routine).forEach(key => {
          routines.push(createRoutine(CONSTANTS.Routine[key]));
        });
  
        return routines;
      }
    };
  })();

  export default DataSeeder;