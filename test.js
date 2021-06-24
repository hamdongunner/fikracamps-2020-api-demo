var jwt = require("jsonwebtoken");

let json = { name: "Atheer" };
var token = jwt.sign(json, "shhhhh");
console.log({ token });

////////////////////////////////////////////////////////////////

try {
  var decoded = jwt.verify(token, "shhhht");
  console.log(decoded); // bar
} catch (error) {
  console.log("invalid key");
}
