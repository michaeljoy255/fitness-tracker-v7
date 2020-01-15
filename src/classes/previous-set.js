class PreviousSet {
  constructor({
    weight = null, // Used for "highest_weight"
    reps = null,
    total_moved = null // Take weight * reps for "most_weight"
  }={}) {
    this.created_at = new Date().toISOString();
    this.weight = weight;
    this.reps = reps;
    this.total_moved = total_moved;
  }
}

export default PreviousSet;