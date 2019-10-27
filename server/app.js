/**console.log("Excited to make memes :)");


function isEqual(x, y){
    if (x.length != y.length)
        return false;

    for(let i = 0; i < x.length; i++){
         if(x[i] != y[i]){
            return false;
         }
    }
    return true;
}

let x = [1,2,3];
let y = [1,2,3];

console.log(isEqual(x,y));**/

//need to type "npm install express --save" in the terminal to run express
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// Server will always find an open port.
const port = process.env.PORT || 3001;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});


// Access example.com/memes
app.get('/memes', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', (req, res) => {
    res.status(404).sendFile(__dirname + '/error.html');
})
