//Package Imports
const axios = require("axios").default;

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

  /**
   * Function to get all cards of a customer
   * @param {String} id The customer's id
   * @returns {Promise} The result of the API request
   */
  listCards(id) {
    return axios.get(`${this.tenantid}/customers/${id}/cards`);
  }

  /**
   * Function to get a card of a customer
   * @param {String} id The customer's id
   * @param {String} cardID The card's id
   * @returns {Promise} The result of the API request
   */
  getCard(id, cardID) {
    return axios.get(`${this.tenantid}/customers/${id}/cards/${cardID}`);
  }

  /**
   * Function to get create a card for a customer
   * @param {String} id The customer's id
   * @param {String} payload Card related data (source, etc)
   * @returns {Promise} The result of the API request
   */
  addCard(id, payload) {
    return axios.post(`${this.tenantid}/customers/${id}/cards`, payload);
  }

  /**
   * Function to delete a card from a customer
   * @param {String} id The customer's id
   * @param {String} cardID The card's id
   * @returns {Promise} The result of the API request
   */
  removeCard(id, cardID) {
    return axios.delete(`${this.tenantid}/customers/${id}/cards/${cardID}`);
  }
}

module.exports = Customers;
