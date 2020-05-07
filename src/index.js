// import './dom';
import {styleBody , addTitle, greeting} from './dom'; // Not only function but dom.js will also be loaded
import users, {getPremiumUsers} from './data';   // here, 'users' can be named with any name

console.log('index file');
addTitle('test export');

console.log(greeting);

console.log(users);

const premUsers = getPremiumUsers(users);
console.log(premUsers);