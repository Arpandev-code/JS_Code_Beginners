const name="Arpandev"
const repoCount=50

//console.log(name + repoCount + " values"); Old method for string concatination

//New Method : String Interpolation where we use placeholder
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Arpandev')
 console.log(gameName[0])// 0
 console.log(gameName.toUpperCase); //ARPANDEV
 console.log(gameName.charAt(2)) //p
 console.log(gameName.indexOf('p'));// 2

 const newgameName= gameName.substring(0,4)
 console.log(newgameName);

 const anotherMethod=gameName.slice(-8,4)
console.log(anotherMethod);

const newString= "   hitesh   "
console.log(newString);
console.log(newString.trim());

const url="https://iamarpandev.online/blog%20hya"
console.log(url.replace('%20','_'));
console.log(url.includes('arpan'));//true
console.log(url.includes('priyam'));//false