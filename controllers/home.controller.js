const { okRes } = require("../tools/util");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.home = (req, res) => {
  console.log(req.msg);

  // query -> /?key1=value&key=value   /// OPTIONAL
  let query = req.query;

  // params
  let params = req.params;

  // header
  let headers = req.headers;

  // body
  let body = req.body;

  // send the response
  // status
  return okRes(res, { query, params, headers, body });
};
