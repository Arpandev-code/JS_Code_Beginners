let score= "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);// type will be number

// case :2

let score1= "33abc"

console.log(typeof score1);


let valueInNumber1= Number(score1)
console.log(typeof valueInNumber1);

console.log(valueInNumber1);// output: NaN

//case:3
let score2= null

console.log(typeof score1);


let valueInNumber2= Number(score2)
console.log(typeof valueInNumber2);

console.log(valueInNumber2);// output: 0

// case : 4
let score3= undefined

console.log(typeof score1);


let valueInNumber3= Number(score3)
console.log(typeof valueInNumber3);

console.log(valueInNumber3);// output: NaN

//case :5
let score4=true
console.log(typeof score4);
let valueInNumber4=Number(score4);
console.log(valueInNumber4);// outout: 1

// for false output will be 0
let isLoggedIn= 1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=> true 0=> false
//""=> false
//"Arpandev"=> true
