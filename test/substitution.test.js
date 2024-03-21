// Write your tests here!
const {expect} = require('chai')
const {substitution} = require('../src/substitution')

describe("Check parameters for errors", () => {
    it("should return false if alphabet isn't exactly 26 characters long", () => {
        actual = substitution("message", "abc");

        expect(actual).to.be.false;
    })

    it("should return false if there are any repeat letters", () => { 
        actual = substitution("message", "plmoknijbuhvygctfxrdzeswap") //two ps

        expect(actual).to.be.false;
    })
})

describe("Encoding", () => {
    it("should maintain spaces", () => {
        actual = substitution("a message", "plmoknijbuhvygctfxrdzeswaq");
        expected = "p ykrrpik";

        expect(actual).to.equal(expected);
    })

    it("should ignore capital letters", () => {
        actual1 = substitution("a MesSage", "plmoknijbuhvygctfxrdzeswaq");
        actual2 = substitution("A mEssAgE", "plmoknijbuhvygctfxrdzeswaq");

        expected = "p ykrrpik";

        expect([actual1, actual2]).to.deep.equal([expected, expected]);
    }) 
})

describe("Decoding", () => {
    it("should maintain spaces", () => {
        actual = substitution("p ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
        expected = "a message";

        expect(actual).to.equal(expected);
    })
})

