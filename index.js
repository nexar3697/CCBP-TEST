const add = require("./calculator");
console.log(add(6, 4));

const path = require("path");
const filePath = path.join("users/myprojecsts/daredevil.js");
console.log(typeof filePath);

//Date Module
const addDays = require("date-fns/addDays");
const format = require("date-fns/format");

const dateFormat = format(new Date(2022, 03, 28), "yyyy-MM-dd");
const result = addDays(new Date(2022, 03, 20), 8);
console.log(dateFormat);
console.log(result);
