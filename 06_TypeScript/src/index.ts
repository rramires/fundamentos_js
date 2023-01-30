import { ICustomer, IContact, IPerson, saveCustomer, save } from "./controllers/Customer";


const customer1: ICustomer = {
    name: 'Fulano',
    age: 22,
    phone: '9999-9999',
    email: 'fula@test.com'
};

saveCustomer(customer1);


const customer2: ICustomer = {
    name: 'Sicrano',
    age: '22',
    phone: '9999-9999',
    email: 'sic@test.com'
};


// in generics define type here

save<ICustomer>(customer2);

const contact: IContact = {
    phone: '9999-9999',
    email: 'sic@test.com'
};

save<IContact>(contact);

save<IPerson>({
    name: 'Sicrano',
    age: '22'
});






