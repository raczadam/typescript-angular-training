var Customer = /** @class */ (function () {
    function Customer(theFirst, theSecond) {
        this.firstName = theFirst;
        this.lastName = theSecond;
    }
    return Customer;
}());
//let myCustomer = new Customer();  <-- with only parameterized constructor won't be work
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";
var myCustomer = new Customer("Martin", "Dixon");
console.log("Customer name is ".concat(myCustomer.firstName, " ").concat(myCustomer.lastName));
