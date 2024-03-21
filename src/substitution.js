// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function invertObj(obj) {
    res = {};

    for (let key in obj) {
      res[obj[key]] = key;
    }

    return res;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here



    if (!alphabet || alphabet.length != 26)
      return false;

    let keyMap = {};

    for (let i in alphabet) {
      if (alphabet[i] in keyMap)
        return false;

      keyMap[alphabet[i]] = i;
    }

    let res = "";

    input = input.toLowerCase();

    let alphabetMap = {
      a: 0, b: 1, c: 2, d: 3, e: 4,
      f: 5, g: 6, h: 7, i: 8, j: 9,
      k: 10, l: 11, m: 12, n: 13, o: 14,
      p: 15, q: 16, r: 17, s: 18, t: 19,
      u: 20, v: 21, w: 22, x: 23, y: 24,
      z: 25
    }

    if (encode) {

      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ')
          res = res + ' ';
        else
          res = res + alphabet[alphabetMap[input[i]]];
      }

    }

    else {

      alphabetMap = invertObj(alphabetMap);


      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ')
          res = res + ' ';
        else
          res = res + alphabetMap[keyMap[input[i]]];
      }
    }


    return res;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
