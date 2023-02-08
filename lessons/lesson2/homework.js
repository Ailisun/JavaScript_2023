// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr1 = ['white', 'blue', 33, 56, '200k', ['east', 'west',[23, 45, 78], 'north', 'south'], true]
// console.log(arr1[5][3]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[5][1]);
// console.log(arr1.length)
// console.log(arr1[5][3])
// console.log(arr1[5][2][2])
// console.log(arr1[4]);
// console.log(arr1[6]);
//
// arr1[arr1.length]= false
// console.log(arr1)
// console.log(arr1.length)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'Harry Potter',
//     pagesCount: 400,
//     genre:'fantasy'
// }
//
// let book2 = {
//     title: 'The Hunger Games',
//     pagesCount:600,
//     genre:'thriller'
// }
//
// let book3 = {
//     title:'Fault in Our Stars',
//     pagesCount:270,
//     genre:'drama'
// }
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book4 = {
//     title:'Practical part',
//     pageCount: 100,
//     genre:'science',
//     authors: [
//         {
//             name:'Ann',
//             age:25
//         },
//
//         {
//             name:'Oles',
//             age:40
//         }
//     ]
// }
//
// let book5 = {
//     title:'Way Down',
//     pageCount:40,
//     genre:'drama',
//     authors:[
//         {
//             name:'Emil Khan',
//             age:32
//         },
//
//         {
//             name:'Anna Kroup',
//             age:47
//         }
//     ]
// }
//
// let book6 = {
//     title:'To the Stars',
//     genre:'fantasy',
//     pageCount:400,
//     authors:[
//         {
//             name:'Alesya Ort',
//             age:34
//         },
//         {
//             name:'Ostap Tvorchii',
//             age:21
//         }
//     ]
// }
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let users = [
//     {name: 'Anatolii', userName:'GreenTea', password:'loc446j*'},
//     {name: 'Anna', userName:'SweetCherry', password:'12345678.'},
//     {name: 'Olya', userName:'olcha', password:'45kiwn*_erjfk'},
//     {name: 'Stas', userName:'RedPepper', password:'sd//edrfji_'},
//     {name: 'Nastya', userName:'Dancer01', password:'Fel4os7*2j_'}
// ]
// console.log(users[2]['password']);
// console.log(users[1]['password']);
// console.log(users[4]['password']);
// console.log(users[0]['password']);
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.

//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// x = -3;
// if (x !== 0) {
//     console.log('Correct')
// } else {
//     console.log ('Try again')
// }

// if (x !== 0 && x!== -3) {
//     console.log('Correct')
// } else {
//     console.log ('Try again')
// }

// if (x>0 && x<5) {
//     console.log('Correct')
// }
// else {
//     console.log('Negative number')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 18
//  if (time > 0 && time < 15) {
//      console.log('Persha polovyna')
// } else if (time > 15 && time < 30) {
//      console.log ('Druga polovyna')
//  } else if (time >30 && time < 45) {
//      console.log('Tretia polovyna')
//  } else if (time > 45 && time < 60) {
//      console.log('Chetverta polovyna')
//  } else {
//      console.log('Please enter the number')
//  }
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 27;
// if ( day > 0 && day <= 10) {
//     console.log(1)
// } else if ( day > 10 && day <= 20) {
//     console.log(2)
// } else if (day > 20 && day <= 31) {
//     console.log(3)
// } else {
//     console.log('Enter the day from 0 - 31')
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = 'saturday';
// switch (day) {
//     case 'monday':
//         console.log('Sleep, make a hometask, dinner')
//     break;
//
//     case 'tuesday':
//         console.log('Work hard, drink water, stay calm')
//         break;
//
//     case 'wednesday':
//         console.log('Work tasks, dance, dinner')
//         break;
//
//     case 'thursday' :
//         console.log('English lesson, work, courses')
//         break;
//
//     case 'friday':
//         console.log('go to the gim, party time, take a shower ')
//         break;
//
//     case 'saturday':
//         console.log('Relax the whole day')
//         break;
//
//     case 'sunday':
//         console.log('Clean the house, make a food, walk with friends')
//         break;
//
//     default:
//         console.log('Enter the name of the day pls')
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// x = 9;
// y = 9;
//
// if (x > y) {
//     console.log(x)
// } else if (y > x) {
//     console.log(y)
// } else if (y === x) {
//     console.log('equal')
// }
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = null;
// let answer = x || 'default' // тут виводить трушні значення як вони є, якщо фолс - то дефолт надпис
// console.log(answer);
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
