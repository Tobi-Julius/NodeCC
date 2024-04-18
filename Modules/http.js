const http = require("http");

//create server object

http
  .createServer((req, res) => {
    // response
    res.write("This is the response");
    res.end();
  })
  .listen(5000, () => {
    console.log("listening");
  });
