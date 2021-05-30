const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = require("../../Members.js");

//gets all members
router.get("/", (req, res) => {
  //nothing else is needed of json like making api requests
  //express handles it for you
  res.json(members);
});

//get single member
//colon is a URL parameter
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id == req.params.id);

  if (found) {
    res.json(
      members.filter((item) => {
        return item.id == req.params.id;
      })
    );
  } else {
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.id} found` });
  }
});

//create members
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }
  members.push(newMember);
  res.json(members);
});

module.exports = router;
