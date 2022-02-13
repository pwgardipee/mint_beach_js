const axios = require("axios").default;

//Import all resources
const Auth = require("./resources/auth");
const Customers = require("./resources/customers");
const Orders = require("./resources/orders");
const Products = require("./resources/products");
const Skus = require("./resources/skus");
const Users = require("./resources/users");
const Charges = require("./resources/charges");
const Labels = require("./resources/labels");

const mb = function (originTenantId, targetTenantId) {
  //Set tenantid on all mb requests
  axios.interceptors.request.use((config) => {
    if (originTenantId) config.headers.tenantid = originTenantId;
    return config;
  });

  //Objects for accessing all tenant related Mint Beach endpoints
  return {
    auth: new Auth(targetTenantId),
    customers: new Customers(targetTenantId),
    orders: new Orders(targetTenantId),
    products: new Products(targetTenantId),
    skus: new Skus(targetTenantId),
    users: new Users(targetTenantId),
    charges: new Charges(targetTenantId),
    labels: new Labels(targetTenantId),
  };
};

module.exports = mb;
