const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const background = require("./routes/background");
const contact = require("./routes/contact");
const info = require("./routes/info");
const portfolio = require("./routes/portfolio");
const trending = require("./routes/trending");
const review = require("./routes/review");
const service = require("./routes/service");
const notFound = require("./middleware/errorMiddleware.js");
const errorHandler = require("./middleware/errorMiddleware.js");
const compression = require("compression");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//CACHE GET REQUESTS, MIDDLEWARE
let setCache = function (req, res, next) {
  const period = 60 * 5;

  if (req.method == "GET") {
    res.set("Cache-control", `public, max-age=${period}`);
  } else {
    res.set("Cache-control", `no-store`);
  }

  next();
};

//USE THE CACHE MIDDLEWARE
app.use(setCache);

//DYNAMIC COMPRESSION
app.use(compression());

//CORS,ACCEPT JSON
app.use(cors());
app.use(express.json());

//ENDPOINTS HIT WILL SHOW IN CONSOLE (ONLY DEVELOPMENT)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//DB CONNECT
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection success");
});

//STATIC BUILD FOLDER
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//SERVERROUTES
app.use("/api/background", background);
app.use("/api/portfolio", portfolio);
app.use("/api/trending", trending);
app.use("/api/info", info);
app.use("/api/contact", contact);
app.use("/api/review", review);
app.use("/api/service", service);

//REGISTER + LOGIN
app.use("/api/users", userRoutes);

//PRODUCTION / DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
}

//PORT
app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
