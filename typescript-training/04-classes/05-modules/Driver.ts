import { Customer } from "./Customer";

let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";

console.log(`Customer name is ${myCustomer.firstName} ${myCustomer.lastName}`);