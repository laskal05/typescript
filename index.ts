class User {
  static readonly minimumNameLength: number = 4;

  constructor(private _name: string, private readonly email: string) {
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
}

const user = new User("laskal05-before");

console.log("Get name");
console.log(user.name);

console.log("");
console.log("Set name & Get name");
user.name = "laskal05-after";
console.log(user.name);
