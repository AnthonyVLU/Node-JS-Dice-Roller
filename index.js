const express = require("express");
const cors = require("cors"); 
const app = express();
const port = process.env.PORT || 3000

app.use(cors({ origin: '*' }))

app.get("/roll", (req, res) => {
    let rollResult = Math.floor(Math.random() * 6) + 1
    res.send(rollResult.toString()); // Sending the number as plain text
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});