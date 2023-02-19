const intern = require('../lib/intern');

describe('intern', () => {
    it("can set name of school", () => {
        const test = "Kansas University";
        const e = new intern("", 3, "", test);
        expect(e.school).toBe(test);
    });

    it("can set role", () => {
        const e = new intern(); 
        expect(e.getRole()).toBe('intern');
    });
})