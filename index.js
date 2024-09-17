const http = require("node:http");

const server = http.createServer((req, res) => {
  const successHeaders = { "Content-Type": "text/plain" };

  if (req.method === "GET") {
    switch (req.url) {
      case "/":
        res.writeHead(200, successHeaders);
        return res.end("Welcome to the home page");
      case "/about":
        res.writeHead(200, successHeaders);
        return res.end("About us page");
      case "/contact":
        res.writeHead(200, successHeaders);
        return res.end("Contact us page");
      default:
        res.writeHead(404, successHeaders);
        return res.end("Error 404: Page not found");
    }
  }

  const dummyData = {
    name: "John Doe",
    email: "john@doe.com",
    message: "this is a test message",
  };

  if (req.method === "POST") {
    if (req.url === "/contact") {
      res.writeHead(200, successHeaders);
      return res.end(`Contact form received: ${JSON.stringify(dummyData)}`);
    } else {
      res.writeHead(404, successHeaders);
      return res.end("Error 404: Page not found");
    }
  }

  if (req.method !== "POST" && req.method !== "GET") {
    res.writeHead(502, successHeaders);
    return res.end(`Error 502: ${req.method} method not allowed`);
  }
});

server.listen(5000, () => {
  console.log("server is up and running on port 5000");
});
