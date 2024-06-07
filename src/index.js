#!/usr/bin/env node
//chalk
import chalk from 'chalk';
import inquirer from 'inquirer';
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
// console.log('Hello decoder')
const main = async () => {
    console.clear();
    console.log(chalk.bgMagenta('Hello againt'));
    const x = await askName();
    console.log(x);
};
async function askName() {
    let x = 'a';
    const a = await inquirer.prompt([{ name: 'test', default: 'aaaaa' }]);
    return x;
}
main();
/*
  

    "ts-node": "^10.9.2",

    "nodemon": "^3.1.3",
    "typescript": "^5.4.5"
    "@types/node": "^20.14.2",
  */
