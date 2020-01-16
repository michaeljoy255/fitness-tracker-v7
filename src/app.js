import DataSeeder from './modules/data-seeder';

/**
 * Main App
 */
document.addEventListener("DOMContentLoaded", e => {
  let exercises = DataSeeder.seedExercises();
  let routines = DataSeeder.seedRoutines();

  console.log(exercises);
  console.log(routines);
});