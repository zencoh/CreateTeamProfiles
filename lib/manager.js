const employee = require("./employee");

class manager extends employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'manager';
    }
}

module.exports = manager