"use strict";

/**
 * @todo
 */
class Measurement {
  constructor({
    unit_pref = null,
    body_weight = null,
    body_fat = null
  } = {}) {
    this.created_at = new Date().toISOString();
    this.body_weight_lbs = this.getImperialWeight(unit_pref, body_weight);
    this.body_weight_kg = this.getMetricWeight(unit_pref, body_weight);
    this.body_fat = body_fat;
    // Other measurements could be added
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
