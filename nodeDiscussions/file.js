/**
 *
 *
 * Streams in Node.js
 * - make use of zlib module to compress files
 * - 4 types of streams in Node.js
 * a. readable - stream to read data from a source ( fs.createReadStream() )
 * b. writable - stream to write data to a destination ( fs.createWriteStream() )
 * c. duplex - stream that is both readable and writable ( Sockets )
 * d. transform - stream that can modify or transform the data as it is written and read ( zlib.createGzip() )
 */
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "big.file");
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream("copyOfBig.file");
// readableStream.on("data", (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data`);
//   writableStream.write(chunk);
// });
readableStream.pipe(writableStream);

readableStream.on("error", (err) => {
  console.log("error while reading", err);
});

writableStream.on("error", (err) => {
  console.log("error while writing", err);
});

readableStream.on("end", () => {
  writableStream.end();
  console.log("Finished reading data");
});
