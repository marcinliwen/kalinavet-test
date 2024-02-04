const postmark = require("postmark");

// Send an email:
const postclient = new postmark.ServerClient("c4be5fbd-004a-4214-bd90-0402fa38faa7");

export {postclient}