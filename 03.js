// 03 contains ES6 module
// templete litral
//let name="sarthak"
//let age=22;
//console.log(` hi my name is : ${names} and my age: ${age}`)

// destructuring module
// we can do destructuring in array and object
// array destructuring
const arr=[5,3,2,31,34];
const [a,b,c,d,e]=arr;
console.log(a);//5
console.log(b);//3
// object destructuring
const person={
  name:"sarthak",
  age:21,
  gender:"male"
}
// acessing the object
// dot notation
console.log(person.name);
// bracket notation
console.log(person["age"]);
// destructring 
const {gender,age}=person;
console.log(gender,age);