const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://akshit:8327@foods.veogstq.mongodb.net/foods?retryWrites=true&w=majority";
// main().catch(err => console.log(err));

const mongoDB = async () => {
  try {
    const result = await mongoose.connect(mongoURI);
    if (result) {
      console.log("connected");

      // Reading / fetching data
      const fetched_data = mongoose.connection.db.collection("food_items");
      fetched_data
        .find({})
        .toArray()
        .then((data) => {
          console.log();
        })
        .catch((err) => {
          console.log(err);
        });
      
    }
  } catch (err) {
    console.log("- - - ", err);
  }
};

module.exports = mongoDB;
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
