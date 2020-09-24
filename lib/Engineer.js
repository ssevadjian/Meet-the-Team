// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitUser) {
    super(name, id, email);
    this.title = "Engineer";
    this.github = gitUser;
  }
  getGithub() {
      return this.github;
  }
}

module.exports = Engineer;
