var express = require("express");
var router = express.Router();
const HomeController = require("../controllers/home.controller");
const UserController = require("../controllers/user.controller");

/**
 *
 */

// get all (search filter)
router.get(`/users`, UserController.getAll);
// get one
router.get(`/users/:id`, UserController.getOne);
// add one
router.post(`/users`, UserController.add);

// delete one
router.delete(`/users/:id`, UserController.delete);

// edit one
router.put(`/users/:id`, UserController.edit);

router.get(`/:id`, HomeController.home);

module.exports = router;
