const http = require("node:http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      return (
        res.writeHead(200, { "Content-Type": "text/plain" }),
        res.end("Welcome to home page")
      );
    case "/about":
      return (
        res.writeHead(200, { "Content-Type": "text/plain" }),
        res.end("About us page")
      );
    case "/contact":
      return (
        res.writeHead(200, { "Content-Type": "text/plain" }),
        res.end("Contact us page")
      );
      default : return res.end("404 error")
  }
});

server.listen(5000, () => {
  console.log("server is up and running on port 5000");
});
