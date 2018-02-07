const Router = require("express").Router;
const bodyParser = require("body-parser");
const db = require("./data/db");

class Middleware {
  constructor() {
    this.router = Router();
    this.router.use(bodyParser.urlencoded({extended:false}));
    this.router.use(bodyParser.json());
    db;
  }

  getRouter() {
    return this.router;
  }
}

module.exports = Middleware;
