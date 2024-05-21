// let firstObj = { name: 'Hello' };
//
// let secondObj = firstObj;
//
// firstObj = { name: 'Bye' };
//
// console.log(secondObj.name);
//
// console.log({}+[]+{}+[1])
// console.log(!!"false" == !!"true")
// console.log(['x'] == 'x')
//
// const greet = function(name) {
//   return 'Hello, ' + name;
// };
//
// console.log(greet('John'))
//
// const sayHello = function(name) {
//   return `Hello, ${name}`
// }
//
// console.log(sayHello('John'))
//
// function Person(name) {
//   this.name = name;
//   this.greet = () => {
//     console.log('Hello, ' + this.name);
//   };
// }
//
// const alice = new Person('Alice');
// alice.greet(); // Hello, Alice
//
// (function() {
//   console.log('This function runs immediately after it is defined');
// })();
//
// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// }
//
// let count = 42;
// const counter = createCounter();
// counter(); // 1
// counter(); // 2
// counter(); // 3

// let f = () => {
//   console.log(42);
// }
//
// let execute = (func) => {
//   setTimeout(func, 1000);
// }
//
// execute(f); // что выведет в консоль и почему
//
// f = null;

// const original = { a: 1, b: { c: 2 } };
// const copy = Object.assign({}, original)
// console.log(copy)
// copy.b.c = 3; //змінилося в оригиналі

// const original = { a: 1, b: { c: 2 } };
// const copy = {...original}
// console.log(copy)
// copy.b.c = 3; //змінилося в оригиналі

// const copy = JSON.parse(JSON.stringify(original));

// const copy = structuredClone(original)

// let animal = {
//   eats: true,
//   walk() {
//     console.log('animal walks')
//   }
// }
//
// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// rabbit.walk();
// console.log(rabbit.jumps)
//
// function Main () {}
// Main.prototype = { protected: true };
//
// const obj = new Main();
// Main.prototype = { protected: false };
//
// console.log('Object protection: ', obj.protected);

// Context this examples

// let user = {
//   name: 'Іван',
//   greet: function () {
//     console.log('Привіт, ' + this.name);
//   }
// };
//
// user.greet(); // Виведе: Привіт, Іван
//
// console.log(this)
//
// function showFunctionContext() {
//   console.log(this)
// }
// showFunctionContext();
//
// function Person(name) {
//   this.name = name;
// }
//
// Person.prototype.greet = function() {
//   console.log('Hello, ' + this.name);
// };
//
// const alice = new Person('Alice');
// alice.greet(); // Hello, Alice
//
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//   greet() {
//     console.log('Hello, ' + this.name);
//   }
// }
//
// const alice = new Person('Alice');
// alice.greet(); // Hello, Alice
//
// const greetArrow = (name) => 'Hello, ' + this.name;
//  // Hello, Alice
// console.log(greetArrow('Bob'));    // Hello, Bob
//
// let user = {
//   name: 'Іван',
//   greet: function() {
//     console.log('Привіт, ' + this.name);
//   }
// };
//
// let greet = user.greet.bind(user);
// greet(); // Привіт, Іван

// PROMISES

// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     // Припустимо, що це запит до серверу, який триває 1 секунду
//     const externalData = "data received";
//     resolve(externalData);  // Переходить в стан "fulfilled"
//     // reject("failure reason");  // Можна викликати, щоб перейти в стан "rejected"
//   }, 1000);
// });
//
// myPromise
//   .then(function(data) {
//     console.log(data);  // "data received"
//     return data.toUpperCase();
//   })
//   .then(function(modifiedData) {
//     console.log(modifiedData);  // "DATA RECEIVED"
//   })
//   .catch(function(error) {
//     console.error(error);  // Виведе помилку, якщо проміс відхилений
//   })
//   .finally(() => {
//     console.log("Cleanup actions");  // Виконується завжди після `.then()` або `.catch()`
//   });

// console.log('1 .Start');
//
// setTimeout(() => {
//   console.log('2. Timeout');
// }, 0);
//
// Promise.resolve().then(() => {
//   console.log('3. Promise A');
// }).then(() => {
//   console.log('4. Promise B');
// });
//
// console.log('5. End');

