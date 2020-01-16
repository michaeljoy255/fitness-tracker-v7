import DataSeeder from './modules/data-seeder';
import HomeFunctions from './modules/home-functions';
import HelperFunctions from './modules/helper-functions';

/**
 * Main App
 */
document.addEventListener("DOMContentLoaded", e => {
  let exercises = DataSeeder.seedExercises();
  let routines = DataSeeder.seedRoutines();

  console.log(exercises);
  console.log(routines);

  HomeFunctions.constructHomePage(routines);
  HelperFunctions.loadEventListeners(routines);
});