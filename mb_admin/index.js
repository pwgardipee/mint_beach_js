//Import all resources
const Auth = require("./resources/auth");
const Tenants = require("./resources/tenants");
const Users = require("./resources/users");

//Objects for accessing all admin related Mint Beach endpoints
const mb_admin = {
  auth: new Auth(),
  tenants: new Tenants(),
  users: new Users(),
};

module.exports = mb_admin;
