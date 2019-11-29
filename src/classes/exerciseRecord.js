"use strict";

/**
 * @todo
 */
class ExerciseRecord {
  constructor({
    sets = []
  } = {}) {
    this.created_at = new Date().toISOString();
    this.sets = sets;
  }
}