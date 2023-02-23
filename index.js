// files needed to run the app
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// empty array of employees that will fill based on user input
const employees = [];

// array of questions for user input
function startPrompt() {
    currentEmployee = {}
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name of team member'
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter team member's id",
            // validation of identification being all numbers
            validate: val => {
                if (!/^[0-9]+$/gi.test(val)) {
                    return 'Please enter numbers only';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team members email address',
            default: () => { },
            validate: function (email) {
                // validation of email being having @email.com
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                if (valid) {
                    console.log(' Great job');
                    return true;
                } else {
                    console.log(' Please enter a valid email')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'typeOfEmployee',
            message: 'What is the team member\'s position?',
            choices: ['Engineer', 'Intern', 'Manager']
        }
        // bringing all the startPrompt() answers to the array
    ]).then(function (answers) {
        var name = answers.name;
        currentEmployee.name = name;
        var id = answers.id;
        currentEmployee.id = id;
        var email = answers.email;
        currentEmployee.email = email;
        // if statement to generate extra questions based on the type of employee
        if (answers.typeOfEmployee === 'Engineer') {
            return promptEngineer()
        } else if (answers.typeOfEmployee === 'Intern') {
            return promptIntern();
        } else return promptManager();
    });
};
// adding each specific roles prompt to the rest of their answers
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s github username?'
        }
    ]).then(function (answers) {
        var github = answers.github
        currentEmployee.github = github
        console.log(currentEmployee);

        const newEngineer = new Engineer(currentEmployee.name, currentEmployee.id, currentEmployee.email, currentEmployee.github);
        employees.push(newEngineer);

        finishPrompt();
    })
};

function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern attend?'
        }
    ]).then(function (answers) {
        var school = answers.school
        currentEmployee.school = school
        console.log(currentEmployee);

        const newIntern = new Intern(currentEmployee.name, currentEmployee.id, currentEmployee.email, currentEmployee.school);
        employees.push(newIntern);
 
        finishPrompt();

    })
};

function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?'
        }
    ]).then(function (answers) {
        var officeNumber = answers.officeNumber
        currentEmployee.officeNumber = officeNumber
        console.log(currentEmployee);

        const newManager = new Manager(currentEmployee.name, currentEmployee.id, currentEmployee.email, currentEmployee.officeNumber);
        employees.push(newManager);

        finishPrompt();
    })
};

// this function will either loop the questions to add another employee or it will create the html file

function finishPrompt() {
    return inquirer.prompt([
        {
            type:'list',
            name: 'startNewPrompt',
            message: 'Would you like to add more team members?',
            choices: ['Yes', 'No']
        }
    ]).then(function (answers) {
        if (answers.startNewPrompt === 'Yes') {
            return new startPrompt()
        } else return generateHtml();
    });
};

startPrompt()

function generateHtml() {
    var html = '';
    employees.forEach(function (e) {
        const typeOfEmployee = e.role;
        if (typeOfEmployee === 'Intern' ) {
            html += `<div class="col mt-5">
            <div id="employees-div" class="card col-md-3" style="width: 18rem;">
                <div class="card-body" style="background-color: rgb(57, 89, 153);">
                    <div class="h2 card-title" style="color: rgb(255, 255, 255);">${e.name}</div>
                    <div class="h3 card-subtitle mb-2" style="color: rgb(255, 255, 255);">${e.role}</div>
                </div>
                <div class="h5 card-body card-text mb-2" style="color: rgb(0, 0, 0);">Employee ID: ${e.id}
                    <div class="card-text mt-2">Email:<a href = "mailto: ${e.email}">${e.email}</a></div>
                    <div class="card-text mt-2">School: ${e.school}</div>
                </div>
                </div>
            </div>
            
            `
            }
            else if (typeOfEmployee === 'Manager') {
                html += `<div class="col mt-5">
                <div id="employees-div" class="card col-md-3" style="width: 18rem;">
                    <div class="card-body" style="background-color: rgb(57, 89, 153);">
                        <div class="h2 card-title" style="color: rgb(255, 255, 255);">${e.name}</div>
                        <div class="h3 card-subtitle mb-2" style="color: rgb(255, 255, 255);">${e.role}</div>
                    </div>
                    <div class="h5 card-body card-text mb-2" style="color: rgb(0, 0, 0);">Employee ID: ${e.id}
                        <div class="card-text mt-2">Email:<a href = "mailto: ${e.email}">${e.email}</a></div>
                        <div class="card-text mt-2">Office Number: ${e.officeNumber}</div>
                    </div>
                </div>
            </div>
            
            `
            } 
            else if (typeOfEmployee === 'Engineer') {
                html += `<div class="col mt-5">
                <div id="employees-div" class="card col-md-3" style="width: 18rem;">
                    <div class="card-body" style="background-color: rgb(57, 89, 153);">
                        <div class="h2 card-title" style="color: rgb(255, 255, 255);">${e.name}</div>
                        <div class="h3 card-subtitle mb-2" style="color: rgb(255, 255, 255);">${e.role}</div>
                    </div>
                    <div class="h5 card-body card-text mb-2" style="color: rgb(0, 0, 0);">Employee ID: ${e.id}
                        <div class="card-text mt-2">Email:<a href = "mailto: ${e.email}">${e.email}</a></div>
                        <div class="card-text mt-2">GitHub:<a href = https://github.com/${e.github}>${e.github}</a></div>
                    </div>
                </div>
            </div>
            
            `
            }
            return html
        })

// this reads the template html file and then writes to a new file after adding the box of employee information above
    fs.readFile('./dist/teamProfilesTemplate.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const mainHtmlPage = data.replace('<!-- {{employee}} -->', html);
            fs.writeFile('./teamProfiles.html', mainHtmlPage, (err) => {
                if (err)
                console.log(err);
                else {
                    console.log('profile generated sucessfully')
                }
            });
        };
    });
}