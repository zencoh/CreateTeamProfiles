const employee = require("./employee");

class intern extends employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'intern'
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'intern';
    }
}

module.exports = intern