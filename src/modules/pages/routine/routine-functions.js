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
      <div class="routine-title" id="${routineId}">${fitnessData.routines.find(routine => routine.id === routineId).name}</div>
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

      exercisesHtml += `
        <div class="exercise" id="${foundExercise.id}">
          <div class="exercise-heading">
            <span class="exercise-name">${foundExercise.name}</span>
            <span class="exercise-category">${foundExercise.category}</span>
          </div>
          <div class="exercise-notes">
            <p>${foundExercise.notes}</p>
          </div>
          ${constructExerciseDetails(foundExercise)}
        </div>
      `;
    });

    return exercisesHtml;
  }

  const constructExerciseDetails = function(exercise) {
    let exerciseDetails = "";

    if (exercise.details instanceof CardioDetails) {
      exerciseDetails = constructCardioInputs(exercise);
    } else if (exercise.details instanceof WeightDetails) {
      exerciseDetails = constructWeightInputs(exercise);
    }

    let exerciseInputs = `
      <div class="exercise-details">${exerciseDetails}</div>
    `;
    
    return exerciseInputs;
  }

  const constructCardioInputs = function(exercise) {
    let cardioHeading = `
    <div class="cardio-heading">
      <span>Duration</span>
      <span>Distance or Steps</span>
    </div>
    `;

    let cardioInputs = `
      <div class="cardio-inputs-row">
        <input id="${exercise.id}_duration">
        <input id="${exercise.id}_distance">
      </div>
    `;

    return `${cardioHeading}${cardioInputs}`;
  }

  const constructWeightInputs = function(exercise) {
    let weightHeading = `
      <div class="weight-heading">
        <span>Set</span>
        <span>Weight</span>
        <span>Reps</span>
      </div>
    `;

    let weightInputs = `
      <div class="weight-inputs-row">
        <span>1</span>
        <input id="${exercise.id}_weight_1">
        <input id="${exercise.id}_reps_1">
      </div>
      <div class="weight-inputs-row">
        <span>2</span>
        <input id="${exercise.id}_weight_2">
        <input id="${exercise.id}_reps_2">
      </div>
      <div class="weight-inputs-row">
        <span>3</span>
        <input id="${exercise.id}_weight_3">
        <input id="${exercise.id}_reps_3">
      </div>
      <div class="weight-inputs-row">
        <span>4</span>
        <input id="${exercise.id}_weight_4">
        <input id="${exercise.id}_reps_4">
      </div>
      <div class="weight-inputs-row">
        <span>5</span>
        <input id="${exercise.id}_weight_5">
        <input id="${exercise.id}_reps_5">
      </div>
    `;

    return `${weightHeading}${weightInputs}`;
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