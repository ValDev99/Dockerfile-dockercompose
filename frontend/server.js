import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Frontend service running!");
});

server.listen(8080, () => {
  console.log("Frontend service running on port 8080");
});
