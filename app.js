const express = require('express');
const methodOverride = require('method-override');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

const employee = require('./routes/employee.route');

employee(app);


const port = 8080;

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})