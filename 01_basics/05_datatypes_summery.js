//Primitive:
// 7 types: String, Number,Boolean, null, undefined,Symbol, Bigint

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp= null
let userEmail;

const id=Symbol('123')
const anotherId= Symbol('123')

console.log(id === anotherId); //false
const bigNumber=3425254354353433n



//Reference(Non primitive)

//Arrray, Objects, Funstions
//Array
const heros=["shaktiman","naagraj","doga"]

//object
let myObj={
    name:"hitesh",
    age:22,
}
//funstions
const myFunction=function(){
    console.log("hello world");
}


//Stack(Primitive), Heap(Non-Primitive)


let myName="ArpandevBhattacharya"

let myFirstname= myName

myFirstname="Arpandev"

console.log(myName); //output- ArpandevBhattacharay
console.log(myFirstname);//output- Arpandev

let userOne ={
    email:"user@google.com",
    upi:"user@ybi"
}

let userTwo=userOne

userTwo.email="hi@gmail.com"

console.log(userOne.email);//hi@gmail.com
console.log(userTwo.email); //hi@gmail.com

