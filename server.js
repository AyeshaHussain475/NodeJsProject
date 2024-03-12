const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request to server");
});

server.listen(3000, "localhost", () => {
  console.log("Server is listening");
});