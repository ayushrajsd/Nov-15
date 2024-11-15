// fs - file system module
// import - ES6 module system
// require - CommonJS module system
const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const content = "Hello, World";
// fs.writeFile("example.txt", content, "utf8", (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File created");
// });

// fs.stat("file.txt", (err, stats) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File size:", stats.size);
//   console.log("Is directory:", stats.isDirectory());
// });

// const directoryName = "my-directory";
// fs.mkdir(directoryName, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("Directory created");
// });

// fs.rmdir(directoryName, {recursive: true}, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Directory deleted");
// })

// path module - core node module

// const path = require("path");
// // const fullPath = path.join("folder", "subfolder", "file.txt");
// const fullPath = path.resolve("folder", "subfolder", "file.txt");
// console.log(fullPath);

// const extension = path.extname("file.txt");
// console.log(extension);

// const normalizedPath = path.normalize("/path/to/../file.txt"); // / -> path -> to -> .. -> file.txt
// // /path/./to/../to/../../file.txt => /path -> . -> path -> to -> .. -> path -> to -> .. path .. -> /file.txt
// console.log(normalizedPath);

const http = require("http");

const server = http.createServer((req, res) => {
  // handle incoming requests
  //   res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Type", "application/json");
  //   res.write("Hello, World");
  //   res.write("<html><head><title>My First Page</title></head><body>");
  //   res.write("<h1>Hello, World</h1>");
  //   res.write("</body></html>");
  const jsonData = {
    message: "Hello, World",
    date: new Date(),
  };
  const jsonResponse = JSON.stringify(jsonData);
  res.write(jsonResponse);
  res.end();
});

const port = 8080;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
