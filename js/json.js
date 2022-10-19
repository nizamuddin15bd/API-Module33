// javascript  object Notation
// JSON 
const user = { id: 11, name: 'Gorid Amir', jod: 'action' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Stor',
    address: 'Ranbir road',
    profit: 1500,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor',
    },
    inExpensive: false,
};
const shopStingified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStingified);
const converted = JSON.parse(shopStingified);
console.log(converted.address);