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

connection.connect(function (err) {
    if (err) throw err;
    console.log("You have connected to the database. ID: " + connection.threadId + "\n");
    mainProgram();
});
// END LOCALHOST SERVER

function mainProgram() {
    console.log("****** WELCOME TO CLAmazon! ******" + "\n" +
                " The useful store with the awkward name.");

    

    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Find Products by ID",
                // "List All Products",
                "Exit Program"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "List Products by ID":
                    listItems();
                    break;

                // case "List All Products":
                //     listAllProducts();
                //     break;
                case "Exit Program":
                    console.log("Goodbye!");
            }
        });
}


function listItems(){
    connection.query("SELECT * FROM bamazon_db", function(err, res){
        console.log(res);
    })
}

// function findById(){
//     inquirer.prompt({
//         name: "action",
//         type: ""
//     })
// }

// DEPRECATED
// function listAllProducts(){
//     console.log("List!");
// }