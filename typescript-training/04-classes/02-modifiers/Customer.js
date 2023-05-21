var Customer = /** @class */ (function () {
    function Customer(theFirst, theSecond) {
        this._firstName = theFirst;
        this._lastName = theSecond;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//let myCustomer = new Customer();  <-- with only parameterized constructor won't be work
var myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
console.log("Customer name is ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
//adding some code comment
//new os, try a commit
