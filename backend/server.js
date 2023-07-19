

const express = require('express');
const cors = require('cors');
const userCtrl = require('./controllers/user');
const multer = require('./middleware/multer-config');

const mongoose = require('mongoose');

require('dotenv').config();

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
const { login } = require('./middleware/login');
const  {auth}  = require('./middleware/auth');

app.use('/login', login);
app.post('/api/user', multer, userCtrl.createUser);
app.use('/images', express.static('images'));


app.use('/',auth, userRouter);




app.listen(process.env.PORT || 5051, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5051}`);
}
);

