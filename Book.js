// Direct variable = default export
// const Media = require("./Media")

// Destructured variable = module.exports
const {Media} = require("./Media")

class Book extends Media {
    constructor(newName){
        super(newName); // triggers the constructor in the parent class

        // Not needed because ALL media types will have a name!
        // this.name = newName;
    }
}

// let someBook = new Book();
// someBook.name = new Book("Coolest programming guide ever 2023")
// console.log(someBook.name);

module.exports = {
    Book
}