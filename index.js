// const Person = require("./person");

// const numers = new Person([1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 6, 9, 9]);

// numers.numsDisplay();

// console.log(__filename, __dirname);

// const Logger = require("./logger")

// const logger = new Logger

// logger.on("message", (data)=> console.log(data))

// logger.log("hello mfs")

const http = require("http");
const path = require("path");
const fs = require("fs");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
  console.log(req.url);

  //   if (req.url === "/") {
  //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, cont) => {
  //       if (err) throw err;
  //       res.writeHead(200, {
  //         "Content-Type": "text/html",
  //       });
  //       res.end(cont);
  //     });
  //   } else if (req.url === "/about") {
  //       fs.readFile(path.join(__dirname, "public", "about.html"), (err, cont) => {
  //         if (err) throw err;
  //         res.writeHead(200, {
  //           "Content-Type": "text/html",
  //         });
  //         res.end(cont);
  //       });
  //     }
  // });

//   if (req.url === "/api/users") {
//     const users = [
//       {
//         name: "Lena Gonzales",
//         age: "1.6899",
//       },
//       {
//         name: "Ola Mason",
//         age: "1.7071",
//       },
//     ];

//     res.writeHead(200, {
//       "Content-Type": "application/json",
//     });

//     res.end(JSON.stringify(users));
//   }

 
});
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
