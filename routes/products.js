const router = require("express").Router();
const Products = require("../models/Products");

router.get("/", (req, res) => {
  Products.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
