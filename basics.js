const { people, ages } = require("./module");

console.log(ages);
console.log(people);
// require / import to get that file and run everything inside the file
// if we try to console people in the basics file then it will be any empty object unless we export that file
// because require return an object
// by exporting the file we have an access to the variables and method in that particular file
