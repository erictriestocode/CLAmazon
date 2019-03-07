# CLAmazon
A simple CLI driven storefront written in Javascript with Node.js and MySQL on the back end.
## What is it?
CLAmazon is a *BETA* proof of concept command line shopping application written in javascript, powered by Node.js and MySQL. 
It can:
* Show items for sale that are stored in a table in a database
* Allows you to "purchase" a quantity of said items if there is sufficient stock
* Prevents you from "purchasing" a stock quantity that is not available
* UPCOMING: Manager application
* UPCOMING: Supervisor application
## Requirements
* Node.js
    * be sure to run 'npm install' grab required node packages(see package.json for more information)
* MySQL server, with a store database and at minimum a "products" table
* Working clone of the master branch of this repository
## Usage
All you have to do is to run the following command: 
* node clamazon_customer.js
And you will immediately be shown available products and simple to follow prompts to purchase
## Node.js Packages Used
* MySQL - https://www.npmjs.com/package/mysql
* inquirer - https://www.npmjs.com/package/inquirer
## Screenshots
* Below we have the initial welcome display upon running the program:
![Alt text](/screenshots/mainprogram.png?raw=true "Main Program")
### Other Notes
* clamazon_manager.js and clamazon_supervisor.js are currently placeholder only(upcoming features)
* rerouting to a remote SQL server is in the works; instructions for setup to be included
