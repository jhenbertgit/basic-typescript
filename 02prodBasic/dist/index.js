"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    //getter
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
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
