const db = require('./db/connection');
const inquirer = require('inquirer');
require('console.table');

db.connect((err) => {
    if (err) throw err;
    return promptUser();
})

// First Terminal function
const promptUser = () => {
    inquirer
    .prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['View Departments', 'View Roles', 'View Employees', 'Add a Department', 'Add a roll', 'Add an employee', 'Update Role']
    })
    .then(({ action }) => {
        // Returned actions for choices
        if (action === 'View Departments') {
            return viewDepartments();

        } if (action === 'View Roles') {
            return viewRoles();

        } if (action === 'View Employees') {
            return viewEmployees();

        } if (action === 'Add a Department') {
            return addDepartment();

        } if (action === 'Add a roll') {
            return addRoll();

        } if (action === 'Add an employee') {
            return addEmployee();

        } if (action === 'Update Role') {
            return updateRole();
        }
    })
}

// View Departments
function viewDepartments() {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, res) => {
        if (err) throw err;
    
        console.table(res);
        console.log('Viewing Departments')

        // return user to prompt
        return promptUser();
    });
}

// View all Roles with salaries, and department ID's
function viewRoles() {
    const sql = `SELECT * FROM job`;

    db.query(sql, (err, res) => {
        if (err) throw err;
    
        console.table(res);
        console.log('Viewing Roles')

        // return user to prompt
        return promptUser();
    });
}

// View all Employees with names, jobs, Dep.ID, and Manager ID's
function viewEmployees() {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, res) => {
        if (err) throw err;
    
        console.table(res);
        console.log('Viewing Employees')

        // return user to prompt
        return promptUser();
    });
}

// Add a department
const addDepartment = () => {}

// Add a roll within a department
const addRoll = () => {}

// Add and employee, give them a role, within a department
const addEmployee = () => {}

// Updating an employee role
const updateRole = () => {}