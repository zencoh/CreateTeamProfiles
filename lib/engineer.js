const employee = require("./employee");

class engineer extends employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'engineer';
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'engineer';
    }
}

module.exports = engineer