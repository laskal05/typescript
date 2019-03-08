// First article example
console.log("#########################");
console.log("########### First article");
console.log("#########################");

class User {
  static readonly minimumNameLength: number = 4;

  constructor(private _name: string, private readonly _email: string) {
    this.assertValidName(_name);
  }

  assertValidName(name) {
    if (name.length < User.minimumNameLength) {
      throw Error("hogehoge");
    }
  }

  speak() {
    console.log(`I am ${this._name}`);
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.assertValidName(newName);
    this._name = newName;
  }

  get email(): string {
    return this._email;
  }
}

const user = new User("laskal05-before", "example@sample.com");

console.log("## Get name");
console.log(user.name);
console.log(user.email);

console.log("## Set name & Get name");
user.name = "laskal05-after";
console.log(user.name);
console.log(user.email);
console.log("");

// Second article example
console.log("#########################");
console.log("########## Second article");
console.log("#########################");

type Student = {
  name: string;
  age: number;
  hasScar: boolean;
};

const students: Student[] = [
  { name: "Harry", age: 17, hasScar: true },
  { name: "Ron", age: 17, hasScar: false },
  { name: "Hermione", age: 16, hasScar: false }
];

const getBy = <T, P extends keyof T>(
  model: T[],
  prop: P,
  value: T[P]
): T | null => {
  return model.filter(item => item[prop] === value)[0];
};

let gotten;
gotten = getBy(students, "name", "Harry");
console.log(gotten);

interface Array<T> {
  getBy<P extends keyof T>(prop: P, value: T[P]): T | null;
}

Array.prototype.getBy = function <T, P extends keyof T>(
  this: T[],
  prop: P,
  value: T[P]
): T | null {
  return this.filter(item => item[prop] === value)[0];
};
gotten = students.getBy("name", "Ron");
console.log(gotten);

interface Wand {
  length: number;
}

interface Wand {
  core: string;
}

const myWand: Wand = { length: 11, core: "phoenix feather" };
console.log(myWand);
