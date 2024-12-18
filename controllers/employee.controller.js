const db = require('../db/db');

const getAllEmpCard = (req, res) => {
    const sql = 'SELECT emp_id, full_name, salary, city, avatar FROM tbl_employee';

    db.query(sql, (error, rows) => {
        if(!error){
            // res.redirect('/api/employees/card');
            res.render('employeeCard', { emp_list: rows });
            
        }else{
            res.render('error', { error: error }); // Handle errors with a separate error page
        }
    });
};
const getAllEmp = (req, res) => {
    const sql = 'SELECT emp_id, full_name, salary, city, avatar FROM tbl_employee';

    db.query(sql, (error, rows) => {
        if(!error){
            
            res.render('manageEmployee', { emp_list: rows });
            
        }else{
            res.render('error', { error: error });
        }
    });
};


const getEmpById = (req, res) => { 
    const sql = 'SELECT emp_id, full_name, salary, city, avatar FROM tbl_employee WHERE emp_id = ?';

    const {id} = req.params;

    const param = [id];

    db.query(sql, param, (error, row) => {
        if(!error){
            res.render('detail', {emp_data : row});
        }else{
            res.render('error', {error : error});
        }
    })
} 

const removeEmployee = (req , res) => {
    const sql = 'DELETE FROM tbl_employee WHERE emp_id = ?';
    const {id} = req.params;
    const param = [id];

    db.query(sql, param, (error, row)=>{
        if(!error){
            // res.render('manageEmployee', {message : "Successfully remove!"})
            res.redirect('/api/employees');
        }else {
            res.render('error', {error : error});
        }
    })
}

const createEmployee = (req, res) => {
    const sql = 'INSERT INTO tbl_employee (full_name, salary, city, avatar) VALUES (?, ?, ?, ?)';

    const {id} = req.params;
    const {full_name, salary, city, avatar} = req.body;

    const param = [full_name, salary, city , avatar, id];

    db.query(sql, param, (error, row) => {
        if(!error){
            // res.render("manageEmployee", {emp_data : row, success : true});
            res.redirect('/api/employees');
        }else{
            res.render("error", {error : error});
        }
    })
}

const updateEmployee = (req, res) => {
    const sql = 'UPDATE tbl_employee SET full_name = ? , salary = ?, city = ?, avatar = ? WHERE emp_id = ?';
    const {id} = req.params;
    const {full_name, salary, city, avatar} = req.body;

    const param = [full_name, salary, city,avatar, id];

    db.query(sql, param, (error, row) => {
        if(!error){
            // res.render('manageEmployee', {message : "Successfully updated"});
            res.redirect('/api/employees');
        }else{
            res.render('error', {error : error});
        }
    })
}

module.exports = {
    getAllEmp,
    getAllEmpCard,
    getEmpById,
    createEmployee,
    updateEmployee,
    removeEmployee
}