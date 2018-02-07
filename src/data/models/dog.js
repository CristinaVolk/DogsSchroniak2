const mongoose = require("mongoose");

class DogModel {
    constructor(connection) {
        this.model = connection.model("Dog", this._dogModel(), "Dog");
    }
    getModel() {
        return this.model;
    }

    _dogModel() {
        return new mongoose.Schema({
            name: String,
            age: Number,
            sex: String,
        });
    }
}

module.exports = DogModel;
