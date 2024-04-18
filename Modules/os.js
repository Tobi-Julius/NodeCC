const os = require("node:os");

// platform
console.log(os.platform());

// cpu os.arch
console.log(os.arch());

// cpu core info
console.log(os.cpus());

//device memory

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.uptime());
