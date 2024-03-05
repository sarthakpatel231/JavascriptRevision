// rest and spread operator

//array spread
const arr1=[2,3,5,6];
const arr2=[67,78,45];
const arr3=[...arr1,...arr2,3,4,54];// return a new Array
console.log(arr3);
// object spread
const person={
  firstName:"batman",
  age:24
}
const fullname={...person,lastNmae:"the prince of gowtham"};
console.log(fullname);
// function 
function sum(...numbers){
  console.log(numbers);
}
console.log(sum(3,5,6,36))
// string spread
const str = 'hello';
const chars = [...str];

console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']
