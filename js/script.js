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

let eyeColor = 'green';
let user;
let userName = 'Vasya';
user = userName;
console.log(user);

// ============== operator ===============

let resultOne = 2 + + "2";
console.log(resultOne);
// 4

let resultTwo = 2 + - "2";
console.log(resultTwo);
// 0

//  =================== cycles FOR and WHILE =================

// #1

let num1 = 1;
while (num1 < 6) {
  console.log(num1);
  num1++;
}

let num2 = 1;
do {
  console.log(num2);
  num2++;
} while (num2 < 6);

let num3 = 1;
for (num3; num3 < 6; num3++) {
  console.log(num3);
}

// #2

let num4 = 8;
while (num4) {
  console.log(num4);
  num4--;  
}

// #3

for (let num5 = 0; num5 < 3; num5++) {
  console.log(`Число: ${num5}`);
}

let num6 = 0;
while (num6 < 3) {
  console.log(`Число: ${num6}`);
  num6++;
}

// #4

for (let num7 = 0; num7 < 2; num7++) {

  for (let size = 0; size < 3; size++) {
    if (size == 1) break;
    console.log(size);
  }
}

