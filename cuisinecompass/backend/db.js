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
      const fetched_data1 = await mongoose.connection.db.collection(
        "food_items"
      );
      const food_items = await fetched_data1.find({}).toArray();
      if (food_items) {
        global.food_items = food_items;
        // console.log(global.food_items);
      } else {
        throw err;
      }
      const fetched_data2 = await mongoose.connection.db.collection(
        "food_category"
      );
      const food_category = await fetched_data2.find({}).toArray();
      if (food_category) {
        global.food_category = food_category;
        // console.log(global.food_category);
      } else {
        throw err;
      }
    }
  } catch (err) {
    console.log("- - - ", err);
  }
};

module.exports = mongoDB;
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
