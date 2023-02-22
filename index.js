// files needed to run the app
const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
// const engineerHelper = require('./scr/engineerHelper');
// const internHelper = require('./scr/internHelper');
// const managerHelper = require('./scr/managerHelper');
// const resultPage = require('./scr/resultPage');

const employee = [];

// Array of questions for user input

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
            message: 'What is your position?',
            choices: ['Engineer', 'Intern', 'Manager']
        },

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
    })
};
// adding each type of employee using functions and creating the hole array 
// with then to be used on the html file
function promptEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerPrompt',
            message: 'What is your github?'
        }
    ]).then(function (answers) {

        var engineerPrompt = answers.engineerPrompt
        currentEmployee.engineerPrompt = engineerPrompt
        console.log(currentEmployee);

        const newEngineer = new engineer(currentEmployee.name, currentEmployee.identification, currentEmployee.email, currentEmployee.engineerPrompt);
        employee.push(newEngineer);

        iWantToBreakFree();
    })
};

function promptIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internPrompt',
            message: 'What is your school?'
        }
    ]).then(function (answers) {

        var internPrompt = answers.internPrompt
        currentEmployee.internPrompt = internPrompt
        console.log(currentEmployee);

        const newIntern = new intern(currentEmployee.name, currentEmployee.identification, currentEmployee.email, currentEmployee.internPrompt);
        employee.push(newIntern);
 
        iWantToBreakFree();

    })
};

function promptManager() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerPrompt',
            message: 'What is your office number?'
        }
    ]).then(function (answers) {

        var managerPrompt = answers.managerPrompt
        currentEmployee.managerPrompt = managerPrompt
        const newManager = new manager(currentEmployee.name, currentEmployee.identification, currentEmployee.email, currentEmployee.managerPrompt);
        employee.push(newManager);
        iWantToBreakFree();
    })
};

// this function will either loop the questions or call the function to generate the HTML 

function iWantToBreakFree() {
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
    })

}

startPrompt()


function generateHtml() {
    
        var html = '';
        employee.forEach(function (e) {

            const typeOfEmployee = e.role

            if (typeOfEmployee == 'Intern' ) {
                html += `<div class="col mt-5">
                <div id="employees-div" class="card col-md-3" style="width: 18rem;">
                    <div class="card-body" style="background-color: rgb(57, 89, 153);">
                        <div class="h2 card-title" style="color: rgb(255, 255, 255);">${e.name}</div>
                        <div class="h3 card-subtitle mb-2" style="color: thistle;">${e.role}</div>
                    </div>
                    <div class="h5 card-body card-text mb-2" style="color: rgb(0, 0, 0);">Employee ID: ${e.id}
                        <div class="card-text mt-2">Email: ${e.email}</div>
                        <div class="card-text mt-2">School: ${e.school}</div>
                    </div>
                </div>
            </div>
            
            `
            } if (typeOfEmployee == 'Manager') {
                html += `<div class="col mt-5">
                <div id="employees-div" class="card col-md-3" style="width: 18rem;">
                    <div class="card-body" style="background-color: rgb(57, 89, 153);">
                        <div class="h2 card-title" style="color: rgb(255, 255, 255);">${e.name}</div>
                        <div class="h3 card-subtitle mb-2" style="color: thistle;">${e.role}</div>
                    </div>
                    <div class="h5 card-body card-text mb-2" style="color: rgb(0, 0, 0);">Employee ID: ${e.id}
                        <div class="card-text mt-2">Email: ${e.email}</div>
                        <div class="card-text mt-2">Office Number: ${e.officeNumber}</div>
                    </div>
                </div>
            </div>
            
            `
            } if (typeOfEmployee == 'Engineer') {
                html += `<div class="col mt-5">
                <div id="employees-div" class="card col-md-3" style="width: 18rem;">
                    <div class="card-body" style="background-color: rgb(57, 89, 153);">
                        <div class="h2 card-title" style="color: rgb(255, 255, 255);">${e.name}</div>
                        <div class="h3 card-subtitle mb-2" style="color: thistle;">${e.role}</div>
                    </div>
                    <div class="h5 card-body card-text mb-2" style="color: rgb(0, 0, 0);">Employee ID: ${e.id}
                        <div class="card-text mt-2">Email: ${e.email}</div>
                        <div class="card-text mt-2">Github info: ${e.github}</div>
                    </div>
                </div>
            </div>
            
            `
            }
            return html
        })

    fs.readFile('./dist/teamProfiles.html', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            mainHtmlPage = data.replace('<!-- {{employee}} -->', html);
            fs.writeFile('./dist/teamProfiles.html', mainHtmlPage, (err) => {
                if (err)
                console.log(err);
                else {
                    console.log('profile generated sucessfully')
                }
            });
        }
        // fs.writeFile('./dist/teamProfiles.html', mainHtmlPage, 'utf-8', function (err, data) {
        //     if (err) throw err;
        //     console.log(mainHtmlPage);
        // })
    });
}