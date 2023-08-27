require("dotenv").config();
require("./config/db").connect();
var morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const app = express();
const logger = require("./logger");
const indexRoutes = require("./routes/index");

// logs of API request by morgan
app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode === 204;
    },
  })
);

// file upload support
app.use(
  fileupload({
    createParentPath: true,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: "500mb",
  })
);

// body parser for POST request
app.use(bodyParser.json());

// whitelist domains
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
app.use(cors());

//---Custom Routes---

// Register top-level routes
app.use("/", indexRoutes);

//---Global Error Handling ---
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  logger.error(err);

  res.status(500).json({
    message: "Something went wrong!",
  });
});

// Start server on defined PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
