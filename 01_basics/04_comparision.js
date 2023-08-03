// console.log(null>0); //output- false
// console.log(null==0);// output- false
// console.log(null>=0);// output- true
/*
The reason is that an equality check == and comparisons > < >= <= work differently
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1)null>0 is false.

*/
console.log(undefined ==0);//false
console.log(undefined>0);// false
console.log(undefined<0); //false

console.log("2" == 2); //true

//try to avoid this type of comparision, clean code is more valueble 

