"use strict";
class Customer {
    constructor(theFirst, theSecond) {
        this._firstName = theFirst;
        this._lastName = theSecond;
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
//let myCustomer = new Customer();  <-- with only parameterized constructor won't be work
let myCustomer = new Customer("Martin", "Dixon");
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
console.log(`Customer name is ${myCustomer.firstName} ${myCustomer.lastName}`);
//adding some code comment
//new os, try a commit
