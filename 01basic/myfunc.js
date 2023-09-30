"use strict";
//in function it is compulsory to have type annotation
Object.defineProperty(exports, "__esModule", { value: true });
function getUpper(val) {
  return val.toUpperCase();
}
//have default parameter
var loginUser = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
};
function getVal(myVal) {
  return myVal;
}
var getHello = function (s) {
  return "";
};
var heroes = ["thor", "spidy", "ironman"];
//this is a good practice in typescript
heroes.map(function (hero) {
  return "hero is ".concat(hero);
});
//a good practice only in console the error
function consoleError(errMsg) {
  console.log(errMsg);
}
//when handling error
function handleError(errMsg) {
  throw new Error(errMsg);
}
function createUser(user) {
  return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
