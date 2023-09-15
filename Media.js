
// Media class as common starting pont for
// things like DVD's, books, vinyl 

// Blueprint of the data
class Media {
    constructor(){
        this.name = "default generic media"

        Media.count++;
    }

    getMediaName(){
        return this.name;
    } 

    // Count of all Media that exist
    static count = 0;

    static version(){
        return " class version 0.0.1"
    }

    version(){
        return "prototype version 0.0.1";
    }
    
}

// Instance of the blueprint
let someMedia = new Media();
someMedia.name = "Cool generic media"
console.log(someMedia.name);
console.log(someMedia.getMediaName());

console.log(Media.version());
console.log(Media.prototype.version());

// let arrayLength = Array.length();
// arrayLength = someArrayVariable.length;

let someOtherMedia = new Media();
console.log(someOtherMedia.name);


console.log(`Media library has ${Media.count} items.`)
