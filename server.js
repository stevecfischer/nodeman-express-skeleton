const express = require("express");
const dotenv = require('dotenv');
const result = dotenv.config()

if (result.error) {
    throw result.error
}

console.log(result.parsed)

// require("dotv").config({
//     debug:true,
// });

//express server
const app = express();

app.get("/rest", (req, res) => {
    res.json({
        data: "API is working...",
    });
});

app.listen(process.env.PORT, () => {
    // console.log(`🚀 Server is running at http://localhost:4040`);
    console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
});