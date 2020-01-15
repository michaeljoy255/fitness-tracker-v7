class Exercise {
  constructor({
    id = null,
    name = null,
    category = null,
    notes = null,
    details = null
  }={}) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.notes = notes;
    this.details = details;
  }
}

export default Exercise;