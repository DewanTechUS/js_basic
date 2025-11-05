let x = 6; // global variable
let y = 10;
let z = x + y;
let a = x - y;
let b = x * y;
let c = y / x;   
let modulus = y % x;
console.log(z)
console.log(a);
console.log(b);
console.log(c);
console.log(modulus)
console.log(x**y);
console.log(++x);
console.log(--y);
//let div1 = document.getElementsByName

const addnum = function (x, y) {
    let localX = 5 // only exits in this fuction
    console.log(localX + y)
}
addnum(3,4)
let value = 5;
const number5 = 5;
let arr = [1, "rocky" , 0.99, [1, 2 ,3], {name: "rocky", age: "mind yo bizness"}]
let obj = {
    name: "rocky",
    age: 24,
    faveToy: "some weird duck"
}
console.log(obj);

const array = [1, 2, 3, 4, 5];
array.forEach((num) => {
    console.log(num * 2);
}); 
for (let i = 0; i < array.length; i++) {
    console.log(array[i] + 1);
}
    