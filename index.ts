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

console.log("Get name");
console.log(user.name);
console.log(user.email);

console.log("");
console.log("Set name & Get name");
user.name = "laskal05-after";
console.log(user.name);
console.log(user.email);
