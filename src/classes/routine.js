class Routine {
  constructor({
    name = null,
    exercise_ids = []
  }={}) {
    this.name = name;
    this.exercise_ids = exercise_ids;
  }
}

export default Routine;