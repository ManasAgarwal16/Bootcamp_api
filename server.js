const express = require('express');
const dotenv = require('dotenv');

//load env vars
dotenv.config();

const app = express();
if (process.env.NODE_ENV === 'development') app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('manas');
});

app.listen(PORT, console.log(`server is running on ${PORT}`));
