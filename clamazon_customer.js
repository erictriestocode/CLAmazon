const inquirer = require("inquirer");
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "customer",
    password: "",
    database: "bamazon_db"
});

let connection.connect(function(err){
    if (err) throw err;
    console.log("You have connected to the database. ID: " + connection.threadId + "\n");
    mainProgram();
});


function mainProgram(){
    console.log("Program works!");

};

mainProgram();