const http = require("http");
const discographies = require("./data");
const PORT = 8081;

function requestHandler(req, res) {
  let content;
  let status;
  if (req.url === "/api/discographies") {
    content = { discographies };
    status = 200;
  } else {
    content = { message: "Not found" };
    status = 404;
  }

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
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
