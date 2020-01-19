const HelperFunctions = (function() {
  /**
   * Returns date string formatted as MM/DD/YYYY
   * @returns string
   */
  const getDateString = function() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "/" + day + "/" + year;
  }

  return { getDateString };
})();

export default HelperFunctions;