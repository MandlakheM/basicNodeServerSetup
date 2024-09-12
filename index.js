const http = require("node:http");

const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end("Welcome, this is a simple node server setup.");
});

server.listen(5000, ()=>{
    console.log("server is up and running on port 5000")
});

