const fs = require("node:fs");
const path = require("node:path");

// create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) {
//     console.log("the error", err);
//     throw err;
//   } else {
//     console.log("success");
//   }
// });

// //  create and add to file

// fs.writeFile(
//   path.join(__dirname, "/test", "text.doc"),
//   "hello modafuckers",
//   (err) => {
//     if (err) {
//       console.log("the error", err);
//       throw err;
//     } else {
//       console.log("File created and written");
//       fs.appendFile(
//         path.join(__dirname, "/test", "text.doc"),
//         ", this is the first of many, cheers",
//         (err) => {
//           if (err) {
//             console.log("the error", err);
//             throw err;
//           } else {
//             console.log("File appended and written");
//           }
//         }
//       );
//     }
//   }
// );

//read file

// fs.readFile(path.join(__dirname, "/test", "text.doc"), "utf8", (err, data) => {
//   if (err) {
//     console.log("the error", err);
//     throw err;
//   } else {
//     console.log("File read and printed", data);
//   }
// });

// rename
fs.rename(
  path.join(__dirname, "/test", "text.doc"),
  path.join(__dirname, "/test", "testing.txt"),
  (err) => {
    if (err) {
      console.log("the error", err);
      throw err;
    } else {
      console.log("File renamed");
    }
  }
);
