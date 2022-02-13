//Package Imports
const axios = require("axios").default;

//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the orders resource in the API. */
class Orders extends resourceModel {
  /**
   * Create a resource for the /orders API endpoints.
   */
  constructor(tenantid) {
    super(tenantid, "orders");
    this.tenantid = tenantid;
  }

  /**
   * Function to execute a payment on an existing order
   * @param {String} id The order's id
   * @param {String} payload Any information related to payment(shipping, billing, etc)
   * @returns {Promise} The result of the API request
   */
  pay(id, payload) {
    return axios.post(`${this.tenantid}/orders/pay/${id}`, payload);
  }

  /**
   * Function ship and order
   * @param {String} id The order's id
   * @param {String} payload Any information related to shipping
   * @returns {Promise} The result of the API request
   */
  ship(id, payload) {
    return axios.post(`${this.tenantid}/orders/ship/${id}`, payload);
  }

  /**
   * Function to get shipping estimates for an order
   * @param {String} id The order's id
   * @param {String} payload Any information related to shipping the product
   * @returns {Promise} The result of the API request
   */
  estimateShipping(id, payload) {
    return axios.post(
      `${this.tenantid}/orders/estimate_shipping/${id}`,
      payload
    );
  }
}

module.exports = Orders;
