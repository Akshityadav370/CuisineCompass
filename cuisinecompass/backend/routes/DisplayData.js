const express = require("express");
const router = express.Router();
// const { express, router } = require("../index");

router.post("/foodData", async (req, res) => {
  try {
    console.log(global.food_items);
    res.send([global.food_items, global.food_category]);
  } catch (err) {
    // console.log("- - -", err);
    console.error(err.message);
    res.send('server error!');
  }
});

// export default router;
module.exports = router;