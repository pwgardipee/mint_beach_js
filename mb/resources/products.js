//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the products resource in the API. */
class Products extends resourceModel {
  /**
   * Create a resource for the /products API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "products");
  }
}

module.exports = Products;
