// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function isLetter(str) {
    return str.match(/[a-z]/i);
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }

    let res = "";

    if (!encode) shift = 0-shift;

    input = input.toLowerCase();

    if (shift > 0) {
      for (let i = 0; i < input.length; i++) {
        let j = shift;
        let letter = input[i];

        if (!isLetter(letter)) j=0;

        while (j != 0) {
          if (letter === 'z') {
            letter = 'a';
          }
          else {
            letter = String.fromCharCode(letter.charCodeAt(0) + 1);
          }

          j--;
        }

        res = res + letter;
      }

      return res;
    }

    for (let i = 0; i < input.length; i++) {
      let j = shift;

      letter = input[i];

      if (!isLetter(letter)) j=0;


      while (j != 0) {
        if (letter === 'a') {
          letter = 'z';
        }
        else {
          letter = String.fromCharCode(letter.charCodeAt(0) - 1);
        }

        j++;
      }

      res = res + letter;
    }

    return res;

  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
