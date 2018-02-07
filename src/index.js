const express = require("express");
const Middleware = require("./middleware");
const Routes = require("./routes");
const config = require("./data/config");

class Application {
  constructor() {
        this.app = express();
        this.app.use(new Middleware().getRouter());
        this.app.use(new Routes().getRouter());
        this.app.listen(config.PORT, () => {
            console.log(`Server started on port ${config.PORT}`);
        });
    }
}

module.exports = Application;
