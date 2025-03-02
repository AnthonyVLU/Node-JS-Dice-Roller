const express = require("express");
const cors = require("cors"); 
const app = express();
const PORT = 3000;


app.use(express.static(__dirname));
//app.use(cors());
app.use(cors({ origin: '*' }))

app.get("/roll", (req, res) => {
    let rollResult = Math.floor(Math.random() * 6) + 1
    res.send(rollResult.toString()); // Sending the number as plain text
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});