//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the charges resource in the API. */
class Charges extends resourceModel {
  /**
   * Create a resource for the /charges API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "charges");
  }
}

module.exports = Charges;
