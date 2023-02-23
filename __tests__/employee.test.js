const Employee = require('../lib/employee')

describe('employee', () => {

    it("can set name of employee", () => {
        const test = "Zen Coh";
        const e = new Employee(test, '', '');
        expect(e.name).toBe(test);
    });

    it("can set id of employee", () => {
        const test = 1;
        const e = new Employee('', test, '');
        expect(e.id).toBe(test);
    });

    it("can set email of employee", () => {
        const test = 'zencoh@gmail.com';
        const e = new Employee('', '', test);
        expect(e.email).toBe(test);
    });

    describe('getRole', () => {
        it("getRole() returns employee", () => {
            const test = 'Employee';
            const e = new Employee();
            expect(e.getRole()).toBe(test);
        });
    });
})