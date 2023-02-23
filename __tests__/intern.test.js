const Intern = require('../lib/intern');

describe('intern', () => {
    it("can set name of school", () => {
        const test = "Kansas University";
        const e = new Intern("", 3, "", test);
        expect(e.school).toBe(test);
    });

    it("can set role", () => {
        const e = new Intern(); 
        expect(e.getRole()).toBe('Intern');
    });
})