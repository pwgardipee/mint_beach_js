//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the skus resource in the API. */
class Skus extends resourceModel {
  /**
   * Create a resource for the /skus API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "skus");
  }
}

module.exports = Skus;
