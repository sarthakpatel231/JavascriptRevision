// rest and spread operator

//array spread
const arr1=[2,3,5,6];
const arr2=[67,78,45];
const arr3=[...arr1,...arr2,3,4,54];
console.log(arr3);
// object spread
const person={
  firstName:"batman",
  age:24
}
const fullname={...person,lastNmae:"the prince of gowtham"};
console.log(fullname);