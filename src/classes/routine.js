"use strict";

/**
 * @todo
 */
class Routine {
  constructor({
    name = null,
    exercise_ids = [],
    routine_records = []
  } = {}) {
    this.id = uuid.v4();
    this.name = name;
    this.exercise_ids = exercise_ids;
    this.routine_records = routine_records;
  }
}