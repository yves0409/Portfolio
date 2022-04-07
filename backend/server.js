const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
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
const backgroundRouter = require("./routes/background.js");
app.use("/api/background", backgroundRouter);

const portfolioRouter = require("./routes/portfolio.js");
app.use("/api/portfolio", portfolioRouter);

const trendingRouter = require("./routes/trending.js");
app.use("/api/trending", trendingRouter);

const infoRouter = require("./routes/info.js");
app.use("/api/info", infoRouter);

const contactRouter = require("./routes/contact.js");
app.use("/api/contact", contactRouter);

const reviewRouter = require("./routes/review.js");
app.use("/api/review", reviewRouter);

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
