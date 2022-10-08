const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config();

// Route files
const bootcamps = require('./routes/bootcamp');

const app = express();
if (process.env.NODE_ENV === 'development') app.use(express.json());

//Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on ${PORT}`));
