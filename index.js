const dotenv = require('dotenv');

const conectToDatabase = require("./src/database/connect");

dotenv.config();

conectToDatabase();

require("./modules/express");
// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
// require("./modules/connect");
// require("./modules/mongoose");
