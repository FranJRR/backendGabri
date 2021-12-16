const faker = require('faker');
const chalk = require('chalk');

const randomName = faker.name.findName();
const randomColor = faker.commerce.color();
const myColor = chalk.keyword(randomColor);
console.log(myColor(randomName));
