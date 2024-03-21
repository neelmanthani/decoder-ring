// Write your tests here!
const {expect} = require('chai');
const {caesar} = require('../src/caesar.js')

describe("Invalid shift value", () => {
    it("should return false if shift value is 0", () => {
        const res = caesar("abc", 0);

        expect(res).to.be.false;
    })

    it("should return false if shift value is greater than 25", () => {
        const actual = caesar("abc", 26);

        expect(actual).to.be.false;
    })

    it("should return false if shift value is less than -25", () => {
        const actual = caesar("abc", -26);

        expect(actual).to.be.false;
    })
})

describe("Encoding messages", () => {
    it("should preserve nonalphabetic characters", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";

        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
        const actual1 = caesar("Thinkful", 3);
        const actual2 = caesar("ThInKFul", 3);
        const expected = "wklqnixo";

        expect([actual1, actual2]).to.deep.equal([expected, expected]);
    })

    it("should handle letters that wrap around to beginning of alphabet", () => {
        const actual = caesar("vwxyz", 4);
        const expected = "zabcd";

        expect(actual).to.equal(expected);
    })
})


describe("Decoding messages", () => {

    it("should decode by shifting letters in opposite directions", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";

        expect(actual).to.equal(expected)
    })

    it("should preserve nonalphabetic characters", () => {
        const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";

        expect(actual).to.equal(expected);
    })
})