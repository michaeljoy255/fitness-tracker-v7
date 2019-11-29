"use strict";

/**
 * @todo
 */
class Objective {
  constructor({
    type = null,
    icon = null,
    text = null,
    tooltip = null
  } = {}) {
    this.type = type;
    this.icon = icon;
    this.text = text;
    this.tooltip = tooltip;
  }
}