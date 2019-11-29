"use strict";

/**
 * @todo
 */
class Exercise {
  constructor({
    name = null,
    category = null,
    desc = null,
    notes = null,
    has_duration = false,
    has_distance = false,
    has_weight = false,
    has_reps = false,
    objectives = [],
    exercise_records = []
  } = {}) {
    this.id = uuid.v4();
    this.name = name;
    this.category = category;
    this.desc = desc;
    this.notes = notes;
    this.has_duration = has_duration;
    this.has_distance = has_distance;
    this.has_weight = has_weight;
    this.has_reps = has_reps;
    this.objectives = objectives;
    this.exercise_records = exercise_records;
  }
}