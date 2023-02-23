const engineer = require('../lib/engineer');

describe('engineer', () => {
    it("can set github account", () => {
        const test = 'zencoh';
        const e = new engineer("", 2, "", test);
        expect(e.github).toBe(test);
    });

    it("can set role", () => {
        const e = new engineer(); 
        expect(e.getRole()).toBe('engineer');
    });
})