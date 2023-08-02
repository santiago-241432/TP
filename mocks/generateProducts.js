import { fakerES as faker } from '@faker-js/faker';

export const generateProducts = () =>{
    return{
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price({symbol: '$' }),
        stock: faker.commerce.price({ min: 1, max: 100, dec: 0 }),
        category: faker.commerce.department(),
    }
};