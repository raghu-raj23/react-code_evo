const http = require("node:http");

const server = http.createServer((req, res) => {
  const name = "Goku";
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{name}}", name);
    res.end(html);
  } else if (req.url == "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  }
});

server.listen(3000, () => {
  console.log("server is Listening on 3000");
});

// PM2 =>  pm2 start no-cluster -i 0
// PM2 =>  pm2 stop no-cluster
