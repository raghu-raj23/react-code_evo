const http = require("node:http");
const {Worker} = require("node:worket-threads");

const server = http.createServer((req, res) => {
  const name = "Goku";
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
  } else if (req.url == "/slow-page") {
    const worker = new Worker("./worker-threads.js")
    worker.on("messaage", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page ", j);
    });
  }
});

server.listen(3000, () => {
  console.log("server is Listening on 3000");
});
