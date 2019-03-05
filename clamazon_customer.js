let inquirer = require("inquirer");
let mysql = require("mysql");

//HOSTED SERVER CONNECTION (NOT WORKING)

// let connection = mysql.createConnection({
//     host: "server1.deprecatedhope.com",
//     port: 3306,
//     user: "customer",
//     password: "customerpassword",
//     database: "bamazon_db"
// });

// connection.connect(function(err){
//     if (err) throw err;
//     console.log("You have connected to the database. ID: " + connection.threadId + "\n");
// });

// END HOSTED SERVER CONNECTION

// LOCALHOST SERVER
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "eric",
    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("You have connected to the database. ID: " + connection.threadId + "\n");
    mainProgram();
});
// END LOCALHOST SERVER

function mainProgram(){
    console.log("Program works!");

};

// mainProgram();