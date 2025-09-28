const { Console } = require("console");
const http = require("http");
const url = require("url");
const fs = require("fs");

// templates
const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);

// creating the server
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  if (pathname === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    const output = templateOverview;
    res.end(output);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>page not found!</h1>");
  }
});

// start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
