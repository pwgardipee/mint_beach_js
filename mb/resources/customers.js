//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the customers resource in the API. */
class Customers extends resourceModel {
  /**
   * Create a resource for the /customers API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "customers");
  }
}

module.exports = Customers;
