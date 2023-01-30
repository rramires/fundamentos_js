
export interface IPerson {
    name: string;
    age: number | string;
}

export interface IContact {
    phone: string;
    email: string;
}

export type ICustomer = IPerson & IContact;

// normal function 
export function saveCustomer(customer: ICustomer){

    const age = customer.age as number;

    console.log('Customer: ', customer.name, ' saved!');
}


// generic type function 
export function save<T>(args: T): T {
    return args;
}


