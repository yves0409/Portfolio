const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan');
const path = require('path')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json());




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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
 
}


const backgroundRouter = require('./routes/background.js');
app.use('/background',backgroundRouter)

const portfolioRouter = require('./routes/portfolio.js');
app.use('/api/portfolio',portfolioRouter)

const trendingRouter = require('./routes/trending.js');
app.use('/trending',trendingRouter)  

const infoRouter = require('./routes/info.js');
app.use('/info',infoRouter)

const contactRouter = require('./routes/contact.js');
app.use('/contact',contactRouter)



if (process.env.NODE_ENV === 'production'){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname,'/frontend/build')))
  
  app.get('*',(req,res) => 
  res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}



app.listen(port , ()=> {
    console.log(`Server is running on port : ${port}`);
})