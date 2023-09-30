let score: number | string;
score = 55;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let aiah: User | Admin = { name: "", id: 152 };
aiah = { username: "", id: 5623 };

//note: Union is determined on how you use

function getId(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

getId(1);
getId("1");

export {};
