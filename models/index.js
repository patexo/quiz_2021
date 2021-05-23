const path = require('path');

// Load ORM
const Sequelize = require('sequelize');


// Environment variable to define the URL of the data base to use.
// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
//DATABASE_URL:        shell variable with DB access URL
//sqlite:quiz.sqlite:  SQLite DB in quiz.sqlite file
const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";

const sequelize = new Sequelize(url);

// Quiz Model
sequelize.import(path.join(__dirname, 'quiz'));

// Import the definition of the Users Table from user.js
sequelize.import(path.join(__dirname,'user'));


// Session model
sequelize.import(path.join(__dirname,'session'));


module.exports = sequelize;