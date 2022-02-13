//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the labels resource in the API. */
class Labels extends resourceModel {
  /**
   * Create a resource for the /labels API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "labels");
  }
}

module.exports = Labels;
