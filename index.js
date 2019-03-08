var User = /** @class */ (function () {
    function User(_name, _email) {
        this._name = _name;
        this._email = _email;
        this.assertValidName(_name);
    }
    User.prototype.assertValidName = function (name) {
        if (name.length < User.minimumNameLength) {
            throw Error("hogehoge");
        }
    };
    User.prototype.speak = function () {
        console.log("I am " + this._name);
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this.assertValidName(newName);
            this._name = newName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    User.minimumNameLength = 4;
    return User;
}());
var user = new User("laskal05-before", "example@sample.com");
console.log("Get name");
console.log(user.name);
console.log(user.email);
console.log("");
console.log("Set name & Get name");
user.name = "laskal05-after";
console.log(user.name);
console.log(user.email);
