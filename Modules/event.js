const EventEmitter = require("events");

// creat class

class Emitter extends EventEmitter {}

// init object

const emitter = new Emitter();

// event listener

emitter.on("event", () => console.log("event triggered"));

// innit event

emitter.emit("event");
