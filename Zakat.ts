#! /usr/bin/env node 

import inquirer from "inquirer"
console.log ("\n*First, determine the date on which zakat became farz upon you according to the lunar calendar. As per market value on the above date, determine [and put in the below calculator] the value of all assets which you own on the date set above, and on which Zakah will be calculated. Necessary assets on whose value Zakah is to be calculated are given below.*\n")
let answer = await inquirer.prompt([
    //VALUE OF ASSETS ON WHICH ZAKAH HAS TO BE CALCULATED
      {message: "Put Value of Gold:", type: Number, name: "Gold"},
      {message: "Put Value of Silver:", type: Number, name: "Silver"},
      {message: "Put Value of Local and foreign currency with current rates:", type: Number, name: "Currecny"},
      {message: "Money deposited in banks:", type: Number, name: "Deposit"},
      {message: "Put Value of Prize Bonds:", type: Number, name: "Bonds"},
      {message: "Money deposited in provided fund:", type: Number, name: "PF"},
      { message: "Money deposited in Committee(BC)", type: Number, name: "Comty" },
      {message: "Raw materials in factory etc. (Victorian money and others):", type: Number, name: "RM"},
      {message: "Manufactured goods in factory/shop etc. (A flow of electrical money, a shop, etc.):", type: Number, name: "FG"},
      {message: "Plots, houses or flats for trading:", type: Number, name: "Plot"},
      {message: "Business partnership assets on which Zakah is to be calculated:", type: Number, name: "Pshp"},
      
])
console.log("\nAmount of total wealth for Zakah is:")
console.log(+answer.Gold + +answer.Silver + +answer.Currecny + +answer.Deposit + +answer.Bonds + +answer.PF + +answer.Comty + +answer.RM + +answer.FG + +answer.Plot + +answer.Pshp )

let Liab = await inquirer.prompt([
    //AMOUNT TO BE DEDUCTED FROM TOTAL ZAKAH-ABLE WEALTH (I.E. LIABILITIES)
      {message: "Put Value of Total Liabilities (Loan and any payble):", type: Number, name: "Liabilty"},
])
console.log("\nAmount on which Zakah has to be calculated:")
let total= (+answer.Gold + +answer.Silver + +answer.Currecny + +answer.Deposit + +answer.Bonds + +answer.PF + +answer.Comty + +answer.RM + +answer.FG + +answer.Plot + +answer.Pshp - Liab.Liabilty )
console.log(total)
console.log("\n(Zakah computing formula: Total amount to be divided by 40)")

console.log("Zakah Payable:", total/40 )

console.log("\n**MAY ALLAH BLESS US**" )