const day = require("dayjs");
const moment = require('moment');
const greeting = require("./greeting");
console.log("Hello from JavaScript!");
console.log(moment().startOf("day").fromNow());
console.log(day().format());
greeting("abdosn");
