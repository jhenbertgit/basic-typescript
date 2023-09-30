//syntax for type array
const superHeroes: string[] = [];
const persons: Array<string> = []; //can also be used like this

const nums: number[][] = []; //array within an array

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "", isActive: false });

superHeroes.push("Aiah");

//data1 and data2 are differ each other
let data1: string[] | number[] = ["str", "b", "c"];
data1 = [1, 2, 3];

let data2: (string | number)[] = ["str", 2, "t"];

export {};
