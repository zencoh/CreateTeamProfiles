const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const engineerHelper = require('./scr/engineerHelper');
const internHelper = require('./scr/internHelper');
const managerHelper = require('./scr/managerHelper');
const resultPage = require('./scr/resultPage');

const employees = [];

function startPrompt() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter name of team member'
    },
    {
        type: "list",
        name: 'role',
        message: "Select team member's role",
        choices: ['Engineer', 'Intern', 'Manager']
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter team members id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter team members email address'
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = '';
        if (role === 'Engineer') {
            roleInfo = 'GitHub username';
        } else if (role === 'Intern') {
            roleInfo = 'school';
        } else {
            roleInfo = 'office number';
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: 'roleInfo'
        },
        {
            type: 'list',
            name: 'moreMembers',
            message: 'Would you like to add more team members?',
            choices: ['yes', 'no']
            
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === 'Engineer') {
                newMember = new engineer(name, id, email, roleInfo);
            } else if (role === 'Intern') {
                newMember = new intern(name, id, email, roleInfo);
            } else {
                newMember = new manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember).then(function() {
                if (moreMembers === 'yes') {
                    startPrompt();
                } else {
                    console.log('Team profile created successfully!');
                }
            });
        });
    });
};

function addHtml() {
    return new Promise(function(resolve, reject) {
        let box = '';
        employees.forEach(member => {
            switch (member.getRole()) {
              case 'Engineer':
                box += engineerHelper(member);
                break;
              case 'Intern':
                box += internHelper(member);
                break;
              case 'Manager':
                box += managerHelper(member);
                break;
              default:
                // do nothing
                break;
            }
        });
        const result = resultPage(box);
        // console.log();
        fs.writeFile('./dist/teamProfiles.html', result, function (err) {
            if (err){
                return reject(err);
            }
            console.log('Team member profile added successfully!');
            return resolve();
            });
        });
};

function init() {
    startPrompt();
}
init()