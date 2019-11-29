"use strict";

/**
 * @todo
 */
class Profile {
  constructor({
    unit_pref = null,
    exercises = [],
    routines = [],
    measurements = []
  }={}) {
    this.unit_pref = unit_pref;
    this.exercises = exercises;
    this.routines = routines;
    this.measurements = measurements;
  }
}