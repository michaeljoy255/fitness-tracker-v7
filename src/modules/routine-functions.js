import HelperFunctions from './helper-functions';
import CardioDetails from '../classes/cardio-details';
import WeightDetails from '../classes/weight-details';

const RoutineFunctions = (function() {
  const constructRoutinePage = function(routineId, fitnessData) {
    const app = document.getElementById("app");
    const docFragment = document.createDocumentFragment();
    const routineSection = document.createElement("section");

    routineSection.id = "routine-page";

    const header = `
      <header>
        <span>
          <i class="material-icons" id="cancel-btn">cancel</i>
        </span>
        <span>
          <i class="material-icons">calendar_today</i> &nbsp;
          <span>${HelperFunctions.getDateString()}</span>
        </span>
        <span>
          <i class="material-icons">timer</i> &nbsp;
          <span id="running-timer"></span>
        </span>
      </header>
    `;

    const title = `
      <div class="routine-title" id="${routineId}">
        ${fitnessData.routines.find(routine => routine.id === routineId).name}
      </div>
    `;

    const exercises = constructExercises(routineId, fitnessData);

    const footer = `
      <div class="footer">
        <button id="results-btn">Submit</button>
      </div>
    `;

    const html = `
      ${header}
      ${title}
      ${exercises}
      ${footer}
    `;

    routineSection.innerHTML = html;

    // Replaces home page with routine page once all fragments are ready
    const sectionHome = document.getElementById("home-page");
    docFragment.appendChild(routineSection);
    app.replaceChild(docFragment, sectionHome);

    RoutineFunctions.routineTimer(new Date().getTime());
  }

  const constructExercises = function(routineId, fitnessData) {
    // Routine Exercises - Loop through exercises in the current routine
    const exerciseIds = fitnessData.routines.find(routine => routine.id === routineId)
      .exercise_ids;

    let exercisesHtml = "";
  
    exerciseIds.forEach(exerciseId => {
      let foundExercise = fitnessData.exercises.find(
        exercise => exercise.id === exerciseId
      );

      console.log(foundExercise.details);

      exercisesHtml += `
        <div class="exercise" id="${foundExercise.id}">
          <div class="exercise-heading">
            <span class="exercise-name">${foundExercise.name}</span>
            <span class="exercise-category">${foundExercise.category}</span>
          </div>
          <div class="exercise-notes">
            <p>${foundExercise.notes}</p>
          </div>
          ${constructExerciseInputs(foundExercise)}
        </div>
      `;
    });

    return exercisesHtml;
  }

  const constructExerciseInputs = function(exercise) {

    // WIP

    let exerciseInputs = `
      <div class="exercise-inputs">
        ${exercise.details}
      </div>  
    `;
    
    return exerciseInputs;
  }

  // Not ideal to do it this way...
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

  const stopRoutineTimer = function() {
    clearTimeout(timeId);
  }

  // @todo - more to local storage module???
  const storeRoutineResults = function() {
    console.log("This should tigger a save of unique data to local storage");
  }

  return {
    constructRoutinePage,
    routineTimer,
    stopRoutineTimer
  };
})();

export default RoutineFunctions;