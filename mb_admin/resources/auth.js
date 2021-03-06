//Package Imports
const axios = require("axios").default;

//Local Imports
const resourceModel = require("./../models/resourceModel");

/** Class representing the auth resource in the API. */
class Auth extends resourceModel {
  /**
   * Create a resource for the /auth API endpoints.
   */
  constructor() {
    super("auth");
  }

  /**
   * Function to log in a user
   * @param {String} email The user's email
   * @param {String} password The user's password
   * @returns {Promise} The result of the API request
   */
  login(email, password) {
    return axios.post("/auth/login", {
      email,
      password,
    });
  }

  /**
   * Function to trade in a user's accessToken for a user object
   * @returns {Promise} The result of the API request
   */
  me() {
    return axios.post("/auth/me");
  }

  /**
   * Function to register a new user
   * @param {String} email The user's email
   * @param {String} password The user's password
   * @param {String} name The user's name
   * @returns {Promise} The result of the API request
   */
  signup(email, password, name) {
    return axios.post("/auth/signup", {
      email,
      password,
      name,
    });
  }

  /**
   * Function to set the authorization header for all future requests
   * @param {String} token An accessToken
   */
  setAuthHeading(token) {
    axios.defaults.headers.common["authorization"] = token;
  }
}

module.exports = Auth;
