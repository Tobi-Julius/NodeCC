// Module wrapper func

// (function(exports, require, module, __filename, __dirname){

// })


class Person {
  constructor(numberArray) {
    let uniNums = new Set(numberArray);

    let newUniArray = Array.from(uniNums);

    this.newUniArray = newUniArray;
  }

  numsDisplay() {
    console.log(`My numbers are ${this.newUniArray}`);
  }
}

module.exports = Person;
