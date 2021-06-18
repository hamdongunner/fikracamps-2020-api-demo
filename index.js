const express = require("express");
const app = express();
const port = 3000;
const notFound = require("./middlewares/notFound.middleware");
const auth = require("./middlewares/auth.middleware");
const v1 = require("./routes/v1");

// M
app.use(express.json());
app.use(auth);

// R
app.use("/v1", v1);

// 404 Handel
app.use(notFound);

app.listen(port, () => console.log(`Running at http://localhost:${port}`));
