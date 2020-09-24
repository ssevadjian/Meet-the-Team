// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, title, id, email, gitUser) {
    super(name, title, id, email);
    this.gitUser = gitUser;
  }
}

module.exports = Engineer;
