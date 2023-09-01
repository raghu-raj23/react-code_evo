// const hero = require("./superhero")
// const math = require("./math")
// const Eventemitter = require('node:events')
// const emitter = new Eventemitter

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Ordered a ${size} pizzza with ${topping}`)
// })

// emitter.emit("order-pizza", "Large", "panner")

// const buffer = new Buffer.from("Raghu");
// console.log(buffer) // Stores as Converts binary to Hexadecimal to show
// console.log(buffer.toJSON())
// console.log(buffer.toString())

// const batman = new hero('Batman')
// console.log(batman.getName());
// console.log(math.add(1, 3));

// Callback based fs module

// const fs = require('fs')
// console.log("first");
// console.log("sync ",fs.readFileSync("./file.txt", "utf-8"))
// console.log("second");
// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log(data)
//     }
// })
// console.log("third");

// // Promise based fs module

// // FS uses streams which inherits emitter module
// const fs = require('node:fs/promises')
// console.log("first");
// fs.readFile("./file.txt", "utf-8")
// .then(data => console.log(data))
// .catch((error) => console.log(error))

// console.log("second");

// async function readFile() {
//     try {
//         const data = fs.readFile("./file.txt", "utf-8");
//         console.log(data);
//     }
//     catch(e) {
//         console.log(e);
//     }
// }

// readFile();

// // If performance and resource allocation is concern use callback based

// const fs = require("node:fs")
// const zlib = require("node:zlib")
// // zlib provide compression using gzip algorithm, has built in transform stream

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 10,
// });
// readStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

// const writeStream = fs.createWriteStream("./file2.txt");

// // readStream.on("data", (chunck) => {
// //     console.log(chunck);
// //     writeStream.write(chunck);
// // })

// // pipe returns destination stream
// readStream.pipe(writeStream)
// // For chaining we require the destination stream to be readable, duplex or transform stream but here its writable

// // const writeStream = fs.createWriteStream("./file2.txt");

// const http = require("node:http");
// const fs = require("node:fs")

// // http module also extends the event emitter module and req and res are the event listeners
// const server = http.createServer((req, res) => {
//   const name = "Goku";
//   res.writeHead(200, {"Content-Type": "text/html"});
//   if (req.url == '/') {
//     let html = fs.readFileSync("./index.html", "utf-8");
//     html = html.replace("{{name}}", name);
//     res.end(html);
//   }
//   res.end("nope");
// });

// server.listen(3000, () => {
//     console.log("server is Listening on 3000")
// });

const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 16;

const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

for (let i = 0; i < 16; i++) {
  // libuv has 4 threads in default but can be increased till the max number of cores.

  // Hash: 4 839
  // Hash: 3 862
  // Hash: 1 870
  // Hash: 7 885
  // Hash: 2 888
  // Hash: 5 913
  // Hash: 6 914

  // If threadpool is increased more than num.of cores, then total execution increases due to cpu juggling.

  // Hash: 13 1379
  // Hash: 8 1397
  // Hash: 12 1495
  // Hash: 16 1554
  // Hash: 4 1636
  // Hash: 1 1637
  // Hash: 11 1709
  // Hash: 7 1764
  // Hash: 6 1777
  // Hash: 9 1805
  // Hash: 15 1831
  // Hash: 3 1835
  // Hash: 2 1867
  // Hash: 14 1884
  // Hash: 10 1886
  // Hash: 5 1930

  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log("Hash: " + (i + 1), Date.now() - start);
  });
}
