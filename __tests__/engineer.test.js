const Engineer = require('../lib/engineer');

describe('engineer', () => {
    it("can set github account", () => {
        const test = 'zencoh';
        const e = new Engineer("", 2, "", test);
        expect(e.github).toBe(test);
    });

    it("can set role", () => {
        const e = new Engineer(); 
        expect(e.getRole()).toBe('Engineer');
    });
})