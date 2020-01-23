import State from "../../data/state";
import Helpers from "../../helpers";

/**
 * Component fragments for the Home Page
 */
const RoutineComponents = (function() {
  /**
   * Top navbar
   */
  const getRoutineNavbarFragment = function() {
    const frag = document.createDocumentFragment();
    const navbar = document.createElement("navbar");

    navbar.innerHTML = `
      <navbar class="routine-navbar">
        <span>
          <i class="material-icons" id="cancel-btn">cancel</i>
        </span>
        <span>
          <i class="material-icons">calendar_today</i> &nbsp;
          <span>${Helpers.getShortDateString()}</span>
        </span>
        <span>
          <i class="material-icons">timer</i> &nbsp;
          <span id="routine-timer">00:00:00</span>
        </span>
      </navbar>
    `;

    frag.appendChild(navbar);
    return frag;
  };

  /**
   * Title
   */
  const getRoutineTitleFragment = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "routine-title";
    div.id = State.getCurrentRoutine().id;
    div.innerHTML = State.getCurrentRoutine().name;

    frag.appendChild(div);
    return frag;
  };

  /**
   * Exercises
   */
  const getRoutineExercisesFragment = function() {
    const frag = document.createDocumentFragment();

    State.getCurrentExercises().forEach(exercise => {
      const div = document.createElement("div");
      div.className = "exercise";
      div.id = exercise.id;

      div.innerHTML = `
        <div class="exercise-header">
          <span class="exercise-name">${exercise.name}</span>
          <span class="exercise-category">${exercise.category}</span>
        </div>
        <div class="exercise-notes">
          <p>${exercise.notes}</p>
        </div>
        <div class="exercise-details">
          <p>-----Exercise Details Go Here!!!-----</p>
        </div>
      `;

      frag.appendChild(div);
    });

    return frag;
  };

  /**
   * Footer
   */
  const getRoutineFooterFragment = function() {
    const frag = document.createDocumentFragment();

    const div = document.createElement("div");
    div.className = "routine-footer";
    div.innerHTML = "<button id='finish-btn'>Finish Workout</button>";

    frag.appendChild(div);
    return frag;
  };

  return {
    getRoutineNavbarFragment,
    getRoutineTitleFragment,
    getRoutineExercisesFragment,
    getRoutineFooterFragment
  };
})();

export default RoutineComponents;
