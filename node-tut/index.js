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

const fs = require("node:fs")
const zlib = require("node:zlib")
// zlib provide compression using gzip algorithm, has built in transform stream

const gzip = zlib.createGzip();

const readStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 10,
});
readStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

const writeStream = fs.createWriteStream("./file2.txt");

// readStream.on("data", (chunck) => {
//     console.log(chunck);
//     writeStream.write(chunck);
// })

// pipe returns destination stream
readStream.pipe(writeStream)
// For chaining we require the destination stream to be readable, duplex or transform stream but here its writable



// const writeStream = fs.createWriteStream("./file2.txt");