const { describe } = require('node:test');
const engineer = require('../lib/engineer');

describe('engineer', () => {
    it("can set github account", () => {
        const test = zencoh;
        const e = new engineer("foo", 2, "zencoh@gmail.com", test);
        expect(e.github).toBe(test);
    });

    // test for get role, it should return engineer
})