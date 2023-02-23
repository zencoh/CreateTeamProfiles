const Manager = require('../lib/manager');

describe('manager', () => {
    it("can set github account", () => {
        const test = 1234;
        const e = new Manager("", 4, "", test);
        expect(e.officeNumber).toBe(test);
    });

    it("can set role", () => {
        const e = new Manager(); 
        expect(e.getRole()).toBe('Manager');
    });
})