import DataSeeder from './modules/data-seeder';
import HomeFunctions from './modules/home-functions';
import EventListeners from './modules/event-listeners';

import './styles.scss';

/**
 * Main App
 */
document.addEventListener("DOMContentLoaded", e => {
  // Seed intial data for the app
  let fitnessData = {
    exercises: DataSeeder.seedExercises(),
    routines: DataSeeder.seedRoutines()
  };

  console.log(fitnessData);

  // Constructs DOM for home page when first loaded
  HomeFunctions.constructHomePage(fitnessData.routines);

  // Event listeners are attached to #app when first loaded
  EventListeners.loadEventListeners(fitnessData);
});