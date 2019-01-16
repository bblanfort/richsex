const express = require('express'); // did double quotes change after saving?
const mongoose = require('mongoose');
require('dotenv').config({ path: './variables.env' });

const PORT = process.env.PORT || 4444;

mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const app = express();

app.listen(PORT, () => {
  console.log(`Your Server is listening on PORT ${PORT}`);
});
