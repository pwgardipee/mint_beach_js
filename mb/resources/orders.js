//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the orders resource in the API. */
class Orders extends resourceModel {
  /**
   * Create a resource for the /orders API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "orders");
  }
}

module.exports = Orders;
