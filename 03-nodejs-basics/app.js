// core modules
//https http fs path os

const http = require("http");
//has multiple exports
const routes = require("./routes");
// function requestListener (req,res){}

console.log("From file", routes.fileName);
// createserver event never finishes by default
const server = http.createServer(routes.handler);
//default port 80
server.listen(3000);
//run node app.js
//-parse code,register variables and function
//-event loops starts
//-process.exit // hard exit the event loop

//The event loop
/**
 * -timers -> execute setTimeout, setInterval Callbacks
 * -pending Callbacks -> execute i/o related Callbacks that were deferred
 * -poll -> retreive i/o events and execute their callbacks
 * -check -> execute setImmediate callbacks
 * -close callbacks -> execute all close event callbacks
 * -process.exit -> exit the server (refs == 0)
 */

/**
 * Resources and links
 * Official Node.js Docs: https://nodejs.org/en/docs/guides/
 * Full Node.js Reference (for all core modules): https://nodejs.org/dist/latest/docs/api/
 * More about the Node.js Event Loop: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
 * Blocking and Non-Blocking Code: https://nodejs.org/en/docs/guides/dont-block-the-event-loop/
 *
 */
