//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the users resource in the API. */
class Users extends resourceModel {
  /**
   * Create a resource for the /users API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "users");
  }
}

module.exports = Users;
