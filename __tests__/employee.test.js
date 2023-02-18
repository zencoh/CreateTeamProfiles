const employee = require('../lib/employee')

describe('employee', () => {
    // consts for employee to test
    const e = new employee();

    it("can set name of employee", () => {
        const name = "Zen Coh";
        expect(e.name).toBe(name);
    });

    it("can set id of employee", () => {
        const test = 1;
        expect(e.id).toBe(test);
    });

    it("can set email of employee", () => {
        const test = 'zencoh@gmail.com';
        expect(e.email).toBe(test);
    });

    describe('getRole', () => {
        it("getRole() returns employee", () => {
            const test = 'employee';
            expect(e.getRole()).toBe(test);
        });
    });
})