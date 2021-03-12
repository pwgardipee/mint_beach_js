//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the tenants resource in the API. */
class Tenants extends resourceModel {
  /**
   * Create a resource for the /tenants API endpoints.
   */
  constructor() {
    super("tenants");
  }
}

module.exports = Tenants;
