const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env"});
const port = process.env.PORT || 5000;
app.use(cors(
    {
        origin: "https://employeesdetails.netlify.app",
    }
));
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.log(err);
    });
    console.log(`Server is running on port: ${port}`);
});