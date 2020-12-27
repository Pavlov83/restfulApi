const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('express');
const cors = require('cors');
require('dotenv/config');

const postsRoute = require('./routes/posts');

app.use(bodyParser.json())
app.use(cors());

app.use('/posts', postsRoute);


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{useUnifiedTopology: true },() => console.log('connected to DB'))

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=> console.log('app runs on 4000'));