class RoutineDetails {
  constructor({
    previous_routine_date = null,
    previous_routine_time = null
  }={}) {
    this.previous_routine_date = previous_routine_date;
    this.previous_routine_time = previous_routine_time;
  }
}

export default RoutineDetails;