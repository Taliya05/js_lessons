"use strict";
//console.log("Hello World", 'ftgyhui');
// ['1', '2'].forEach(alert);
// alert('hello');

// let eyeColor = '';

// let user = '';
// let userName = 'Vasya';
// user = userName;
// console.log(user);

// let tOrF = (true && true) || false;
// console.log(tOrF);

// let userAge = 34;
// let g = 555;
// let a = `jgjghj ${userAge} gyguhgi ${g} fhcfh`;
// console.log(a);

// let a = Number("3") + 4;
// console.log(a);

// let r = "3" + 4;
// console.log(r);

// let a = +"3" + 4;
// console.log(a);

// console.log('7' == 7);

// console.log('7' === 7);

// console.log(+'66' + + '44');
// console.log('66' * '44');
// console.log('66' > 509);

// console.log(!false && 44 || 55 && !'');

// let ff ;
// console.log(ff ?? "jjj");

let num = 1;
// while (num < 6) {
//   console.log(num);
//   num++;
// }

// for (num = 11; num < 16; num++) {
//   console.log(num);

// }

// // for (num = 0; num <= 10; num=num+2) {
//   // if (num % 2 == 0) {
//   //if (num % 2 == 1) continue;
//     console.log(num);
//   // }
//   }

// let check = 1;

// let f = false;
// for (let num = 0; num < 4; num++) {
//   console.log("num >> " + num);
//   for (let size = 0; size < 3; size++) {
//     console.log("size >> " + size);
//    // if (size == 1) { f = true };
//   }
//  // if(f){break;}
// }

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(j + 1 + (i * 10));
//   }
// }

// function showName() {
//   console.log('Vasya!');
// }
// // showName();
// setTimeout(showName, 0);
// console.log('Kolya!');

// if (2 > 1) {
//   function showMessage() {
//     console.log('Message');
//   };
//   showMessage();
// }

// //==== или ====

// let y;
// if (2 > 1) {
//   function showMessage() {
//     console.log('Message');
//   };
// }
// y();

// ==========================================================
// ========== freelancer for life (redhead) ===============
// ==========================================================

// ============  variables=============

// let eyeColor = 'green';
// let user;
// let userName = 'Vasya';
// user = userName;
// console.log(user);

// // ============== operator ===============

// let resultOne = 2 + + "2";
// console.log(resultOne);
// // 4

// let resultTwo = 2 + - "2";
// console.log(resultTwo);
// // 0

// //  =================== cycles FOR and WHILE =================

// // #1

// let num1 = 1;
// while (num1 < 6) {
//   console.log(num1);
//   num1++;
// }

// let num2 = 1;
// do {
//   console.log(num2);
//   num2++;
// } while (num2 < 6);

// let num3 = 1;
// for (num3; num3 < 6; num3++) {
//   console.log(num3);
// }

// // #2

// let num4 = 8;
// while (num4) {
//   console.log(num4);
//   num4--;
// }

// // #3

// for (let num5 = 0; num5 < 3; num5++) {
//   console.log(`Число: ${num5}`);
// }

// let num6 = 0;
// while (num6 < 3) {
//   console.log(`Число: ${num6}`);
//   num6++;
// }

// // #4

// for (let num7 = 0; num7 < 2; num7++) {

//   for (let size = 0; size < 3; size++) {
//     if (size == 1) break;
//     console.log(size);
//   }
// }

//  =================== Functions =================

// #1

// function showName() {
//   console.log('Vasya');
// }
// setTimeout(showName, 0);
// console.log('Kolya');

// // #2

// showMessage();
// function showMessage() {
//   console.log('Message');
// }

// // #4

// // 'use strict'

//   function showMessage1() {
//     if (2 > 1) {
//       console.log('Message1');
//     }
//   }
// showMessage1();

//  =================== Object =================

// №1 (верна ли запись)
// const userInfo1 = {
// 	name: "Вася",
// 	age: 30,
// }

// Задача №2 (что будет в консоли?)
// let userInfo2 = {
// 	name: "Вася",
// 	age: 30,
// 	"58": 'Значение свойства'
// }
// console.log(userInfo2[58]);

//  №3
// let userInfo3 = {
// 	name: "Вася",
// 	age: 30
// }
// let user = userInfo3;
// user.age = 45;

// console.log(userInfo3.age);

//  №4
// let userInfo4 = {
// 	name: "Вася",
// 	age: 30,
// 	showInfo() {
// 		console.log(`${this.name}`);
// 	}
// }
// let user = userInfo4;
// userInfo4 = null;
// user.showInfo();

// №5
// let userInfo = {
// 	name: "Вася",
//   age: 30,
//   20: 21,
//   adress: {
//     city: "fgfgh",
//     street: 45,
//   }
// }
// for (const key in userInfo) {
// 	// const value = userInfo[key];
//   // console.log(value);
//   console.log("key = ", key, " value = ", userInfo[key]);
// }
// userInfo.adress.street = 34;
// // console.log(userInfo.adress.street);
// // console.log(userInfo["adress"]['street']);
// let t = 'age';
// console.log(userInfo[t]);

// №6
// let userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	address: {
// 		city: "Uzhhorod"
// 	}
// }
// for (const key in userInfo.address) {
// 	console.log(userInfo.address[key]);
// }

// №7
// const userInfo = {
// 	name: "Вася",
// 	age: 30,
// 	"likes js": true
// }
// console.log(userInfo["likes js"]);

// №8
/*
1.Создайте пустой объект userInfo.
2.Добавьте свойство name со значением Вася.
3.Добавьте свойство age со значением 30.
4.Измените значение свойства name на Лена.
5.Удалите свойство name из объекта.
*/

// let userInfo = {
//   name: "Вася",
//   age: 30,
// }

// userInfo.name = "Lena";
// console.log(userInfo);
// delete userInfo.name;
// console.log(userInfo);

//========================  number ==========================

// №1. Получить верное значение округления
// let n = 1.005 + Number.EPSILON
// let numOne = Math.round(n * 100) / 100;
// console.log(numOne); // Выведет 1 что не верно

// №2. Получить число 135.58 из строки
// let value = + parseFloat("135.58px");
// console.log(value);

//  №3. Посттроить верное условное ветвление
// let value = 58 + "Фрилансер";
// if (58 + "Фрилансер" !== NaN) {
// 	console.log('Результат выражения NaN');
// }

// Задача №4.
// Найти максимальное число из 10,58,39,-150,0
// console.log(Math.max(10,58,39,-150,0));

// Задача №5.
// Округлить число 58.858 до числа 58
// console.log(Math.floor(58.858));
// console.log(Date.getFullYear());



//========================  string  ==========================


// Задача №1. Верна ли запись?
// let fls = "фрилансер";
// let text = `Привет! Я ${fls}`;
// // Ожидаем получить Привет! Я фрилансер
// console.log(text);

// Задача №2. Получить символ "н" строки:
// let text = 'фрилансер';
// let firstSymbol = text[0];
// let lasttSymbol = text[text.length - 4];
// console.log(firstSymbol);
// console.log(lasttSymbol);



// Задача №3. Верно?
// let text = 123 + "456";
// // Ожидаем 579 - не верно!
// console.log(text);

// let text1 = 123 + 456;
// // Ожидаем 579
// console.log(text1);


// Задача №4. Получить строку в верхнем регистре
// let text = 'фрилансер';
// console.log(text.toUpperCase());

// Задача №5. Получить подстроку "лан" из:
// let text = 'фрилансер';
// console.log(text.indexOf('лан'));
// console.log(text.indexOf('лан', 3));


// Задача №6. true или false ?   - false!
// let text = 'фрилансер';
// console.log(text.includes('лан', 4));



//========================   array ==========================



// Задача №1.
// Какое число (длинну) мы получим? -    4
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let newArr = arr;
// newArr.push('Петя');
// console.log(arr.length);


// Задача №2.
/*
Создайте массив users с элементами "Ваня" и "Иштван".
Добавьте "Оля" в конец.
Замените значение в "Иштван" на "Петя".
Ваш код для поиска значения должен
работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте "Маша" и "Паша" в начало массива.
*/
// let users = ["Ваня", "Иштван"];
// users.push("Оля");
// users.splice(1, 1, "Петя");
// console.log(users);
// let usersNew = users.splice(0, 1);
// console.log(usersNew);
// console.log(users);
// users.splice(0, 0, "Маша", "Паша");
// console.log(users);



// Задача №3.
// Удалить элемент 'Иштван' и возвратить его в переменную
// let arr = ['Ваня', 'Иштван', 'Оля',];
// let removed = arr.splice(1, 1);
// console.log(removed);


// Задача №4.
// Сделать из строки массив
// let str = 'Ваня,Иштван,Оля';
// let arr = str.split(',');
// console.log(arr);


// Задача №5.
// Чему равен previousValue в начале работы метода?
// let arr = [9, 2, 8,];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
  
//   console.log(previousValue);
//   return item;
// });



//========================   DOM ==========================

// Задача №1.
// Получить в переменную элемент с атрибутом data-say-hi
// и прочитать значение этого атрибута
{<div data-say-hi="yes">Привет!</div>}

// // Задача №2.
// // Получить в переменную элемент с текстом Йончи
// {/* <ul>
// 	<li>Корчи</li>
// 	<li>Йончи</li>
// </ul> */}

// // Задача №3.
// // Получить в переменную коллекцию элементов с классом like
// <div class="like"></div>
// <div class="subscribe"></div>
// <div class="like subscribe"></div>

// Задача №4.
// Куда добавится <li>Текст</li> ?

// JS
// const list = document.querySelectorAll('ul');
// list.insertAdjacentHTML(
// 	'beforeend',
// 	'<li>Текст</li>'
// );

// // // HTML
// // <ul>
// // 	<li>Пункт №1</li>
// // 	<li>Пункт №2</li>
// // </ul>
