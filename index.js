const { Console } = require("console");
const http = require("http");

// creating the server
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    application: "text/html",
  });
  res.end("<h1>hello world</h1>");
});

// start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
