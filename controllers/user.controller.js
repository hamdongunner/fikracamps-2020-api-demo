const { errRes, okRes } = require("../tools/util");
const validate = require("validate.js");
const { userValidator } = require("../tools/validate.tools");

// get the model
let users = [
  {
    id: 1,
    name: "Ali",
    password: "123456",
    phone: "9647819898919",
    email: "h@h.hh",
    address: "",
    age: 26,
  },
  {
    id: 2,
    name: "Ahmed",
    password: "123456",
    phone: "9647819898919",
    email: "h@h.hh",
    address: "",
    age: 26,
  },
];

// get all (search filter)
/**
 *
 * @param {*} req
 * @param {*} res
 */
module.exports.getAll = (req, res) => {
  return okRes(res, users);
};

/**
 * get one
 * @param {*} req
 * @param {*} res
 */
module.exports.getOne = (req, res) => {
  let id = req.params.id;

  const [user] = users.filter((e) => e.id == id);
  if (!user) return errRes(res, "Not Found", 404);
  return okRes(res, user);
};

/**
 * add one
 * @param {*} req
 * @param {*} res
 */
module.exports.add = (req, res) => {
  // get the body
  let body = req.body;
  // validate the body
  const notValid = validate(body, userValidator());
  console.log({ notValid });
  if (notValid) return errRes(res, notValid, 400);

  // check if already there
  const [user] = users.filter((e) => e.email == body.email);
  if (user) return errRes(res, `This email ${user.email} already exist!`);

  // save in db
  body.id = users.length + 1;

  users.push(body);

  return okRes(res, body);
};

// delete one

/**
 * get one
 * @param {*} req
 * @param {*} res
 */
module.exports.delete = (req, res) => {
  let id = req.params.id;

  users = users.filter((e) => e.id != id);

  return okRes(res, users);
};

/**
 * edit one
 * @param {*} req
 * @param {*} res
 */
module.exports.edit = (req, res) => {
  let id = req.params.id;

  // get the body
  let body = req.body;

  // validate the body
  const notValid = validate(body, userValidator(false));
  console.log({ notValid });
  if (notValid) return errRes(res, notValid, 400);

  const [user] = users.filter((e) => e.id == id);
  if (!user) return errRes(res, "Not Found", 404);

  Object.keys(body).forEach((key) => {
    user[key] = body[key];
  });

  for (let i = 0; i < users.length; i++) {
    const element = users[i];
    if (element.id == user.id) users[i] = user;
  }

  return okRes(res, users);
};
