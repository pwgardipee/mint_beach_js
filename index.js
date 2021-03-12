//Package Imports
const axios = require("axios").default;

//Local Imports
const mb = require("./mb");
const mb_admin = require("./mb_admin");

/**
 * Function that points this SDK to the location of a server. This could be local or remote.
 * @param {String} baseURL The base URL of the server
 * @returns {undefined}
 */
function init(baseURL) {
  axios.defaults.baseURL = baseURL;
}

module.exports = { mb, mb_admin, init };
