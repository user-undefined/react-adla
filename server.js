/**
 * !! DO NOT MODIFY THIS FILE !!
 * If you feel something is wrong here - contact us.
 * In general you shouldn't be using up your time looking through this file ;)
 */
const http = require("http");
const songs = require("./data");
const PORT = 8081;

function requestHandler(req, res) {
  let content;
  let status;
  if (req.url === "/api/songs") {
    content = { songs };
    status = 200;
  } else {
    content = { message: "Not found" };
    status = 404;
  }

  res.setHeader("Access-Control-Allow-Origin", "*"); // CORS * for simplicity
  res.setHeader("Content-Type", "application/json"); // always json
  res.writeHead(status);
  res.end(JSON.stringify(content), "utf-8");
}

http.createServer(requestHandler).listen(PORT, err => {
  if (err) {
    console.log("something bad happened", err);
    return;
  }
  console.log(`server is listening on port: ${PORT}`);
});
