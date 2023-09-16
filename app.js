
// Import book and library
// module.exports = {Book}
const {Book} = require("./Book")
// module.exports = Library
const Library = require("./Library")
// make a library
let newLibrary = new Library();

// make some books
let coolProgrammingBook = new Book("Cool JS things 2023 edition");
let coolPokemonBook = new Book("Cool Pokemon things 2023 edition");

// put books in library
newLibrary.books.push(coolProgrammingBook, coolPokemonBook);
console.log(newLibrary.books);

let {Media} = require("./Media")
console.log(Media.count);