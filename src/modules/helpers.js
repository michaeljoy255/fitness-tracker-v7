/**
 * Helper functions to help simplify and shorten code in other parts of app
 */
const Helpers = (function() {
  /**
   * Returns a short date string formatted as - MM/DD/YYYY
   * @returns {string}
   */
  const getShortDateString = function() {
    const date = new Date();
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  /**
   * Returns a long date string formatted as - Monday Jan 1, 2020
   * @returns {string}
   */
  const getLongDateString = function() {
    const date = new Date();
    return date.toDateString();
  };

  return {
    getShortDateString,
    getLongDateString
  };
})();

export default Helpers;
