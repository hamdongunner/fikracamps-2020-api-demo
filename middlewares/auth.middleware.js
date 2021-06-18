const { errRes } = require("../tools/util");

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
module.exports = (req, res, next) => {
  let headers = req.headers;

  if (headers.token && headers.token == "My lovely token") {
    req.msg = "All is good";
    return next();
  }

  return errRes(res, "You are not ok", 401);
};
