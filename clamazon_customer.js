let inquirer = require("inquirer");
let mysql = require("mysql");

let userItem;
let userQuantity;


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
    listItems();
});
// END LOCALHOST SERVER

function mainProgram() {

    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Buy Products by ID",
                // "List All Products",
                "Exit Program"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "Buy Products by ID":
                    selectItem();
                    break;

                // case "List All Products":
                //     listAllProducts();
                //     break;
                case "Exit Program":
                    console.log("Goodbye!");
                    connection.end();
                    process.exit(1);
            }
        });
}


function listItems() {
    console.log("****** WELCOME TO CLAmazon! ******" + "\n" +
        " The useful store with the awkward name.");
    connection.query("SELECT * FROM products;", function (err, res) {
        if (err) throw err;
        console.table(res);
        mainProgram();
    });
}

function selectItem(){
    inquirer.prompt({
        name: "action",
        type: "input",
        message: "Which Item ID would you like to purchase?",
    }).then(function (answer){
        userItem = answer.action;
        console.log("You Selected: " + userItem);
    })
}

function quantityItem(){
    inquirer.prompt()
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