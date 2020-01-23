class CardioDetails {
  constructor({ last_date = null, duration = null, dist_steps = null } = {}) {
    this.last_date = last_date;
    this.duration = duration;
    this.dist_steps = dist_steps;
  }
}

export default CardioDetails;
