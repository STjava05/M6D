
require('dotenv').config(); 
const mongoose = require('mongoose');
const express= require('express');
  const cors= require('cors');
  const auth= require('./middleware/auth');
  
  const app = express();
  


  app.use(cors());
// middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes
const userRouter = require('./app');
app.use('/',auth, userRouter);




app.listen(process.env.PORT || 5051, () => {
    console.log(`Server is running on port: ${process.env.PORT || 5051}`);
}
);

