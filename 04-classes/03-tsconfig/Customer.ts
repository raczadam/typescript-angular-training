class Customer {

    private _firstName: string;
    private _lastName: string;

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
    
    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    constructor(theFirst: string, theSecond: string){
        this._firstName = theFirst;
        this._lastName = theSecond;
    }
  

}

//let myCustomer = new Customer();  <-- with only parameterized constructor won't be work

let myCustomer = new Customer("Martin", "Dixon");

myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";

console.log(`Customer name is ${myCustomer.firstName} ${myCustomer.lastName}`);

//adding some code comment

//new os, try a commit