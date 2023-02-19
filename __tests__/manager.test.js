const manager = require('../lib/manager');

describe('manager', () => {
    it("can set github account", () => {
        const test = 1234;
        const e = new manager("", 4, "", test);
        expect(e.officeNumber).toBe(test);
    });

    it("can set role", () => {
        const e = new manager(); 
        expect(e.getRole()).toBe('manager');
    });
})