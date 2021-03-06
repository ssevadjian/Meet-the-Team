const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const myTeam = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function app() {
  createManager();
}

function buildTeam() {
    console.log(myTeam);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  fs.writeFileSync(outputPath, render(myTeam), "utf-8");
}

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the employee's job title?",
        name: "title",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any other team members",
        ],
      },
    ])
    .then((a) => {
      let employee = new Employee(a.title);
      if (a.title === "Engineer") {
        newEngineer();
      }
      if (a.title === "Intern") {
        newIntern();
      } else {
        buildTeam();
        return;
      }
      myTeam.push(employee);
    });
};

const newEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter first name of employee:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the employee's GitHub username?",
        name: "gitUser",
      },
    ])
    .then((a) => {
      let engineer = new Engineer(a.name, a.id, a.email, a.gitUser);
      myTeam.push(engineer);
      addEmployee();
    });
};

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter first name of manager:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the manager's employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's contact number?",
        name: "phone",
      },
    ])
    .then((a) => {
      let manager = new Manager(a.name, a.id, a.email, a.phone);
      myTeam.push(manager);
      addEmployee();
    });
};

const newIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter first name of intern:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the internee's ID:",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What school did the intern attend?",
        name: "school",
      },
    ])
    .then((a) => {
      let intern = new Intern(a.name, a.id, a.email, a.school);
      myTeam.push(intern);
      addEmployee();
    });
};

app();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
