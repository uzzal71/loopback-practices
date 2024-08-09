class Customer {
    firstName: string;
    lastName: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }
}

function customerLogger<T extends Customer>(customer: T): void { // generic constraints: extends Customer like a custom type
    console.log(`${customer.firstName} ${customer.lastName}`);
}

let customer = new Customer("Uzzal", "Roy");
customerLogger(customer);

// customerLogger("Uzzal Roy"); // Compiler Error