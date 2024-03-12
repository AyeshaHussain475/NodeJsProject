const http = require("http");

const server = http.createServer((req, res) => {
  console.log("url:", req.url, "method:", req.method);

  //set header content type
  res.setHeader("Content-Type", "text/plain");
  //response which will be send back to browser
  res.write("Ramzan Mubarak");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening");
});
