const url = require("node:url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//serialized url

console.log(myUrl.href);
console.log(myUrl.toString());

// host (root) //hostname doesm't get port
console.log(myUrl.hostname);
console.log(myUrl.host);

console.log(myUrl.pathname);
console.log(myUrl.search);
myUrl.searchParams.append("search", "busty latinas");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((key, value) => console.warn(`${key} ${value}`));
