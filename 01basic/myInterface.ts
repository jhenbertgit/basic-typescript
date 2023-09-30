interface User {
  readonly dbID: number;
  username: string;
  userId: number;
  googleID?: string; //optional
}

//interface can be inherited
interface Admin extends User {
  role: "Admin" | "Learners";
}

const myUser: Admin = {
  dbID: 2369,
  username: "",
  userId: 233,
  role: "Admin",
};
