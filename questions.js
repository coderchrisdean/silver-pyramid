// team card questions

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager of the team's name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the team manager's id?",
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter a valid id.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email?",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter correct email.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team manager's office number?",
        validate: (officeNumberInput) => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter correct office number.");
                return false;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an id.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email address.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?",
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter a valid github username.");
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an id.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: (schoolInput) => {
            if (schoolInput) {
                return true;
            } else {
                console.log("School not entered. Please re-enter.");
                return false;
            }
        }
    }
];

module.exports = {managerQuestions, engineerQuestions, internQuestions};