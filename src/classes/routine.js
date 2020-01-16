class Routine {
  constructor({
    id = null,
    name = null,
    exercise_ids = []
  }={}) {
    this.id = id;
    this.name = name;
    this.exercise_ids = exercise_ids;
  }
}

export default Routine;