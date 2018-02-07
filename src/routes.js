const Router = require("express").Router;
const Dog = (require("./data/db").getConnection()).model("Dog");

class Routes {
  constructor() {
    this.router = Router();
    this.router.post('/api/dogs', function(req, res){
      let username = req.body.username;
      //adding new dog!
      // new Dog({
      //   name: "Tina2",
      //   age: 7,
      //   sex: "female"
      // }).save((err, result) => {
      //   //console.log(result)
      // })

      Dog.find({ name: {$regex: req.body.username}}, (err, result) => {
        res.json({success: true, message: "Found dogs", data: result})
      })


    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = Routes;
