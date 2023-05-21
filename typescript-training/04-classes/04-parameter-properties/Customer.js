class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
console.log(`Customer name is ${myCustomer.firstName} ${myCustomer.lastName}`);
