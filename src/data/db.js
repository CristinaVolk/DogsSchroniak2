const mongoose = require("mongoose");
const config = require("./config");
const DogModel = require("./models/dog");

class DB {
    constructor() {
        this.init();
    }
    getConnection() {
        return this.connection;
    }
    init() {
        this.connection = mongoose.createConnection(config.DB_URL, {
            auth: {
                password: config.DB_PASSWORD,
                user: config.DB_USERNAME,
            },
        });

        this.connection.on("open", () => {
            console.log("info", "Connected to DB");
        });
        this.connection.on("disconnected", () => {
            console.log("info", "Disconnected from DB");
        });
        this.connection.on("error", () => {
            console.log("error", "DB connection error");
        });
        mongoose.Promise = global.Promise;

        this.loadSchame();
    }
    loadSchame() {
        this.dogModel = new DogModel(this.connection).getModel();
    }
}

module.exports = new DB();
