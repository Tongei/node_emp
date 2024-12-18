const employeeController = require('../controllers/employee.controller');


const employee =(app) => {
    app.get('/api/employees/card', employeeController.getAllEmpCard);
    app.get('/api/employees', employeeController.getAllEmp);
    app.get('/api/employees/:id', employeeController.getEmpById);
    app.post('/api/employees', employeeController.createEmployee);
    app.put('/api/employees/:id', employeeController.updateEmployee);
    app.delete('/api/employees/:id', employeeController.removeEmployee);
}


module.exports = employee;