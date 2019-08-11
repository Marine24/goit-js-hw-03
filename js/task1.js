"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mod = "happy";
user.hobby = "javascript";
user.premium = "false";

function logAllKeys(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(`${key}: ${obj[key]}`);
  }
}

logAllKeys(user);
