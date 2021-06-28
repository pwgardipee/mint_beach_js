//Package Imports
const axios = require("axios").default;

/** Class representing a resource in the API. */
class Resource {
  /**
   * Create a Resource for the corresponding API endpoints.
   * @param {String} type The resource type. Ex: products, customers, etc
   */
  constructor(type) {
    this.type = type;
  }

  /**
   * Function to get all documents of a resource
   * @param {Object} query The query parameters for data retrieval
   * @returns {Promise} The result of the API request
   */
  all(query) {
    return axios.get(`/${this.type}`, { params: query });
  }

  /**
   * Function to get a single document
   * @param {String} id The ID of the document
   * @returns {Promise} The result of the API request
   */
  single(id) {
    return axios.get(`/${this.type}/${id}`);
  }

  /**
   * Function to create a single document
   * @param {Object} payload The payload object of the document to be created
   * @returns {Promise} The result of the API request
   */
  create(payload) {
    return axios.post(`/${this.type}`, payload);
  }

  /**
   * Function to update a single document
   * @param {String} id The ID of the document to be updated
   * @param {Object} payload The payload object of the document to be updated
   * @returns {Promise} The result of the API request
   */
  update(id, payload) {
    return axios.patch(`/${this.type}/${id}`, payload);
  }

  /**
   * Function to delete a single document
   * @param {String} id The ID of the document to be deleted
   * @returns {Promise} The result of the API request
   */
  remove(id) {
    return axios.delete(`/${this.type}/${id}`);
  }
}

module.exports = Resource;
