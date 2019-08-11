"use strict";
function countProps(obj) {
  const arrOfValues = Object.values(obj);
  for (let values of arrOfValues) {
  }
  return Object.keys(obj).length;
}
console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
