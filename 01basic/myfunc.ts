//in function it is compulsory to have type annotation

function getUpper(val: string) {
  return val.toUpperCase();
}

//have default parameter
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

function getVal(myVal: number): number {
  return myVal;
}

const getHello = (s: string): string => {
  return "";
};

const heroes = ["thor", "spidy", "ironman"];

//this is a good practice in typescript
heroes.map((hero): string => {
  return `hero is ${hero}`;
});

//a good practice only in console the error
function consoleError(errMsg: string): void {
  console.log(errMsg);
}

//when handling error
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

//type aliases
type User = { name: string; email: string; isActive: boolean };

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

//more examples
type CardNum = {
  cardNum: string;
};

type CardDate = {
  cardDate: string;
};

type CardDetails = CardNum & CardDate & { cvv: number };

export {};
