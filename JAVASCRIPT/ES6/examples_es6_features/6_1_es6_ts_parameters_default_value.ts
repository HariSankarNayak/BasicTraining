// export {};

//normal function call 
/* let showValue1 = function (value1) {
  console.log(value1);
}
showValue1(); //undefined - as no parameters passed 
*/
// ------------------------------

let showValue2 = function (value2 = 20) {
  console.log(value2);
  console.log(arguments.length);
  console.log('// ------------------------------');
}

showValue2(); // 20
showValue2(200); // 200

// ------------------------------

let showValue3 = function (value3 = 20, value4 = value3 + 10) {
  console.log(value3);
  console.log(value4);
  console.log(value3, value4);
  console.log(arguments.length);
  console.log('// ------------------------------');
}

showValue3(); // value3=20, value4=30, value3 20, value4 30, arguments.length 0
console.log('// 1 ------------------------------');

showValue3(200);
console.log('// 2 ------------------------------');

showValue3(200, 300);
console.log('// 3 ------------------------------');