class WeightDetails {
  constructor({
    highest_weight = null,
    most_weight = null,
    previous_sets = []
  }={}) {
    this.highest_weight = highest_weight;
    this.most_weight = most_weight;
    this.previous_sets = previous_sets;
  }
}

export default WeightDetails;