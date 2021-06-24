/**
 * This function used to handel all the ok responses
 * @param {Express Response} res
 * @param {JSON} obj
 * @param {Number} statusCode
 * @returns
 */
module.exports.okRes = (res, obj, statusCode = 200) => {
  res.status(statusCode);
  return res.json({ status: true, data: obj, errMsg: "" });
};

/**
 *
 * @param {*} res
 * @param {*} error
 * @param {*} statusCode
 * @returns
 */
module.exports.errRes = (res, error, statusCode = 400) => {
  res.status(statusCode);
  // if (typeof error == "object")
  //   error = error.message ? error.message : "Something went wrong";

  return res.json({ status: false, errMsg: error, data: null });
};
