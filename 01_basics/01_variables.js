const accountId=1444
let accountEmail="arpan.dev2016@gmailcom"
var accountPassword="1234"
accountCity='Jaipur'
let accountState;

//accountId=2 not allowed
accountEmail="hi@hi.com"
accountPassword="12"
accountCity= "Kolkata"
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope & functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
