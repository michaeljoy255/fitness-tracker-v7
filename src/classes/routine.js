class Routine {
  constructor({
    id = null,
    name = null,
    details = null,
    exercise_ids = []
  }={}) {
    this.id = id;
    this.name = name;
    this.details = details;
    this.exercise_ids = exercise_ids;
  }
}

export default Routine;