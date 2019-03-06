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

// Inquirer code here based on pizza example from inquirer documentation
function selectItem() {
    let questions = [
        {
            name: "actionitem",
            type: "input",
            message: "Which Item ID would you like to purchase?",
        },
        {
            name: "itemquantity",
            type: "input",
            message: "How many would you like to Purchase?"

        }
    ];

    inquirer.prompt(questions).then(function (answer) {
        userItem = answer.actionitem;
        userQuantity = answer.itemquantity
        console.log("You Selected: " + userItem + " and Quantity: " + userQuantity);
        stockCheck(userItem, userQuantity);
    })
}

function stockCheck(item, needed) {
    connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", item, function (err, result) {
        if (err) throw err;
        // console.log(result[0].stock_quantity);
        instock = result[0].stock_quantity;
        if (needed > instock) {
            console.log("Not Enough Stock for your Order!")
            mainProgram();
        } else {
            completePurchase(instock, needed);
            // mainProgram();
        };
    })

}

function completePurchase(qty, amt) {
    console.log("Plenty of stock!");
    var newstock = qty - amt;
    console.log("Purchasing Item...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: newstock
            },
            {
                item_id: userItem
            }
        ],
        function (err, res) {
            if(err) throw err;
            console.log(res.affectedRows + " products purchased" + "!\n");
            listItems();
        }
    );
    
}
