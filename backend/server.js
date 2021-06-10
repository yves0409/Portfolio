const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan');
//const session = require('express-session')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());
// app.set("trust proxy", 1);
// app.use(
//   session({
//     secret: process.env.SESSION_KEY || 'Super Secret (change it)',
//     resave: true,
//     saveUninitialized: false,
//     cookie: {
//       sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
//       secure: process.env.NODE_ENV === "production", // must be true if sameSite='none'
//     }
//   })
// );

//Gives you a log of the endpoints you hit
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}



const uri = process.env.MONGO_URI;
mongoose.connect(uri , {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', ()=> {
  console.log("MongoDB database connection success");
})

const backgroundRouter = require('./routes/background.js');
app.use('/background',backgroundRouter)

const portfolioRouter = require('./routes/portfolio.js');
app.use('/portfolio',portfolioRouter)

const trendingRouter = require('./routes/trending.js');
app.use('/trending',trendingRouter)

const infoRouter = require('./routes/info.js');
app.use('/info',infoRouter)

const contactRouter = require('./routes/contact.js');
app.use('/contact',contactRouter)

app.listen(port, ()=> {
    console.log(`Server is running on port : ${port}`);
})