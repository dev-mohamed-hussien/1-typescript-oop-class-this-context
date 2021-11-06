class Department {
  //how to write variable inside class
  // name:string  = "Mohamed";
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // how to write function inside class
  describ() {
    console.log("descriping", this.name);
  }
}

const accounting: Department = new Department("Accounting");
console.log(accounting);
accounting.describ();

// notes
// [1] you can compile ts to js old version
// this mean you can see how counstructor and prototype
// manage this things what we can do with other langs

// [2] in jsavascript you dont need to declare ur variable
// before assign data in constructor cuz when no prop in class
// this mean its undifiend

// [3] constructor function in ts its function that run
// when take instance of our class

// [4] this keyword is the value that refernced to instanced
// object from our class
console.log("*".repeat(15), "this context", "*".repeat(15));

// this
let obj = {
  acc: accounting.describ
};
console.log(obj.acc()); // output undifined cuz this called
// in another object context

let obj2 = {
  name: "something",
  acc: accounting.describ
};
console.log(obj2.acc()); // output something cuz this called
// in another object context so this.name refer to obj2.name
console.log("*".repeat(5), "protect context of our class func", "*".repeat(5));
// last thing how we avoid function in our class work with
// another context ??
// answer:
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  print(this: User) {
    console.log("hello mr.", this.name);
  }
}
let user = new User("mohamed");
console.log(user.name);
console.log(user.print());
//try to change context as typescript
let anotherUser = {
  name: "ahmed",
  anotherPrint: user.print
};
anotherUser.anotherPrint(); // error in ts but sure will work
//as js code

// to make it work in ts we can chane context on call from inside this obj
// how?
anotherUser.anotherPrint.call(user); // will now print mohamed name
