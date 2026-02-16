const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let temporaryStorage = []; 

app.post("/submit", (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.send("<h2 style='color:red;'>All fields are required!</h2>");
    }

    if (!email.includes("@")) {
        return res.send("<h2 style='color:red;'>Invalid Email Format!</h2>");
    }

    if (age < 1) {
        return res.send("<h2 style='color:red;'>Invalid Age!</h2>");
    }

    temporaryStorage.push({ name, email, age });

    res.send(`
        <h2 style="color:green;">Form Submitted Successfully!</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Age:</b> ${age}</p>
        <br>
        <a href="/">Go Back</a>
    `);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});