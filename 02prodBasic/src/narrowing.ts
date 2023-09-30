//type narrowing sample using in operator

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccnt(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

isAdminAccnt({ name: "Aiah", email: "me@mail.me", isAdmin: false });

type Fish = { swim: () => void };
type Bird = { fly: () => void };

//note the return type to truly identify the value type,
//read docs for more details
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Food for fish";
  } else {
    pet;
    return "Food for bird";
  }
}

export {};
