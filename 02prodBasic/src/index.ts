// class User {
//   email: string;
//   name: string;
//   city: string = "";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

//same as above
class User {
  private _courseCount = 1;
  constructor(private email: string, private name: string) {}

  //getter
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //important: setter has nothing to return
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course must be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const newUser = new User("me@mail.net", "aiah");

//Generic type
function getSearchLatLong<T>(location: T[]): T {
  //TODO: database operations
  const index = 4;
  return location[index];
}

//arrow function equivalent --> check typescript docs for more details
const getSearch = <T>(location: T[]): T => {
  //TODO: some database operation
  const index = 4;
  return location[index];
};

export {};
