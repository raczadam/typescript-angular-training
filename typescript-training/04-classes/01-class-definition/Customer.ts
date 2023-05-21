class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theSecond: string){
        this.firstName = theFirst;
        this.lastName = theSecond;
    }

}

//let myCustomer = new Customer();  <-- with only parameterized constructor won't be work
//myCustomer.firstName = "Martin";
//myCustomer.lastName = "Dixon";

let myCustomer = new Customer("Martin", "Dixon");

console.log(`Customer name is ${myCustomer.firstName} ${myCustomer.lastName}`);

//adding some code comment