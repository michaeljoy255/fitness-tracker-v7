"use strict";

/**
 * @todo
 */
class RoutineRecord {
  constructor({
    start_time = null,
    end_time = null
  } = {}) {
    this.created_at = new Date().toISOString();
    this.start_time = start_time;
    this.end_time = end_time;
  }
}