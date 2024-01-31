// This dependency allows my application to read json. 
const fs = require('fs');

// Installed uniqid npm package to provide unique IDs!  
var uniqid = require("uniqid")

module.exports = function(app) {
    // This is API GET requests
    app.get("/api/ntoes", (req, res) => {
        console.log("This is a GET notes request");
        let data = fs.readFileSync("./db/db.json", "utf8");
        res.json(JSON.parse(data));
    });

    // This is API POST requests
    app.post("/api/notes", (req, res) => {
        const newNote = {
            ...req.body,
            id: uniqid(),
        }
        console.log("This is the POST request");
        let data = fs.readFileSync("./db/db.json", "utf8");
        const dataJSON = JSON.parse(data);
        dataJSON.push(newNote);
        fs.writeFile(
            "./db/db.json",
            JSON.stringify(dataJSON),
            {err, text} => {
                if(err) {
                    console.error(err);
                    return;
                }
                console.log("HELLO", text);
            }
        );
        console.log("We successfully added a new note!");
        res.json(data);
    }
}