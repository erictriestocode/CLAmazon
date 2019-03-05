const inquirer = require("inquirer");
const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "server1.deprecatedhope.com",
    port: 9119,
    user: "customer",
    password: "customerpassword",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("You have connected to the database. ID: " + connection.threadId + "\n");
});


function mainProgram(){
    console.log("Program works!");

};

// mainProgram();