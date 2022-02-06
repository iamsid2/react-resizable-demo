const express = require("express");
const router = express.Router();
const Data = require("../../models/Data");

router.get("/allData", (req, res, next) => {
  console.log("API is Working");
  Data.find({})
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => res.status(404).json(err));
});

router.post("/add", (req, res) => {
  console.log(req.body);
  const newData = new Data({
    name: req.body.name,
  });
  console.log(newData);
  newData
    .save()
    .then((data) => res.send("New Data added"))
    .catch((err) => console.log(err));
});

router.post("/edit", (req, res) => {
  Data.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { name: req.body.name } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Something wrong when updating data!");
      }
      console.log("Updated Value", doc);
    }
  );
});

module.exports = router;
