class CardioDetails {
  constructor({
    previous_cardio_date = null,
    previous_duration = null,
    previous_dist_steps = null,
  }={}) {
    this.previous_cardio_date = previous_cardio_date;
    this.previous_duration = previous_duration;
    this.previous_dist_steps = previous_dist_steps;
  }
}

export default CardioDetails;