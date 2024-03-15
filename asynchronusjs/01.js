// setTimeout
console.log("hello wordl");
 const clear=setTimeout(function(){
console.log(" i will print after 5 secon");
},5000)
console.log("i will print before 5 seconf");
 clearTimeout(clear);