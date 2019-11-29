"use strict";

/**
 * @todo
 */
class OneSet {
  constructor({
    duration = null,
    distance_mi = null,
    distance_km = null,
    weight_lbs = null,
    weight_kg = null,
    reps = null
  } = {}) {
    this.duration = duration;
    this.distance_mi = distance_mi;
    this.distance_km = distance_km;
    this.weight_lbs = weight_lbs;
    this.weight_kg = weight_kg;
    this.reps = reps;
  }

  getImperialWeight(unitPref, weight) {
    return Number((unitPref === "Imperial" ? weight : weight * KG_TO_LBS).toFixed(2));
  }
  
  getMetricWeight(unitPref, weight) {
    return Number((unitPref === "Imperial" ? weight * LBS_TO_KG : weight).toFixed(2));
  }
  
  getImperialDistance(unitPref, distance) {
    return Number((unitPref === "Imperial" ? distance : distance * KM_TO_MILE).toFixed(2));
  }
  
  getMetricDistance(unitPref, distance) {
    return Number((unitPref === "Imperial" ? distance * MILE_TO_KM : distance).toFixed(2));
  }
}