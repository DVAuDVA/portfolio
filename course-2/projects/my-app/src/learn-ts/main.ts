import { greet } from "./helpers";
import { age, book, isAdmin, user, username, userXc } from "./variables";

console.log('---   ---   ---   ---   ---   ---   ---   ---   ---   ---');
console.log('Зовут ' +username);
console.log('Big bad: ' +isAdmin);
console.log('Возраст:' +age);
console.log('');
console.log(greet(user, book));
console.log(greet(userXc, book));
console.log('---   ---   ---   ---   ---   ---   ---   ---   ---   ---');
console.log('');
console.log('');
console.log('');
//npx tsx .\src\learn-ts\main.ts