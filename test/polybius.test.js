// Write your tests here!
const {expect} = require('chai');
const {polybius} = require('../src/polybius');

describe("Encoding", () => {
    it("Converts letters i and j to 42", () => {
        const actual = polybius("ijij");
        const expected = "42424242";

        expect(actual).to.equal(expected);
    })

    it("Ignores capital letters", () => {
        const actual1 = polybius("A Message");
        const actual2 = polybius("a mESsaGe");
        const expected = "11 23513434112251"

        expect([actual1, actual2]).to.deep.equal([expected, expected]);
    })

    it("Maintains spaces", () => {
        const actual = polybius("A M ess age");
        const expected = "11 23 513434 112251"

        expect(actual).to.deep.equal(expected);
    })
})

describe("Decoding", () => {
    it("Converts 42 to i/j", () => {
        const actual = polybius("424242", false);
        const expected = "i/ji/ji/j";

        expect(actual).to.equal(expected);
    })


    it("Maintains spaces", () => {
        const actual = polybius("11 23 513434 112251", false);
        const expected = "a m ess age";

        expect(actual).to.deep.equal(expected);
    })
})