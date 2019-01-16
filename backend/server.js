const express = require("express"); // did double quotes change after saving?
const app = express();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`Your Server listening on PORT ${PORT}`);
});