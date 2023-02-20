// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaOfScquare (a,b) {
//     return a*b;
// }
// console.log(areaOfScquare(6, 12));
// console.log(areaOfScquare(4, 6));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaOfCircle (r){
//     return 3.14*r*2
// }
// console.log(areaOfCircle(17));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaOfCylinder (h,r) {
//     return 2*3.14*h*r
// }
//
// console.log(areaOfCylinder(5, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
// function showArr(arr){
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// showArr([3,56,true,89,'dfg'])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function contentCreation (text) {
//     document.write(`<p>${text}</p>`)
// }
//
// contentCreation('Hi there! It seems you are happy yo learn JS.')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function bulletsCreation (str){
//     document.write(`<ul>
// <li>${str}</li>
// <li>${str}</li>
// <li>${str}</li>
// </ul>`)
// }
// bulletsCreation('Contact')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function bulletsCreation2 (str,number){
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${str}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
// bulletsCreation2('AmountOfFlowers',7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function listCreation (mas) {
//     document.write(`<ul>`)
//     for (let i = 0; i < mas.length; i++) {
//         document.write(`<li>${mas[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listCreation([23, 'tyek', true, 'okg'])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// arrMembers = [
//     {name:'Olha', age:34, id:5468 },
//     {name:'Andrii', age:28, id:5612 },
//     {name:'Kateryna', age:12, id:8222 }
// ]
// function memberInfo(arr) {
//     for (const member of arr) {
//         document.write(`
// <div>Name:${member.name}</div>
// <div>Age: ${member.age}</div>
// <div>ID: ${member.id}</div>
//             <hr>`)
//     }
//
// }
// memberInfo(arrMembers)
// - створити функцію яка повертає найменьше число з масиву
// function smallNumber (arrNumbers) {
//     let minValue = arrNumbers[0];
//     for (let i = 0; i < arrNumbers.length; i++) {
//         if (arrNumbers[i] < minValue) {
//             minValue = arrNumbers[i]
//         }
//         console.log(minValue)
//
//     }
// }
// smallNumber([8, 67, 34, 5])

//можна ще так, підглянула після того як нам розказали за рест//
// function smallNumber (arrNumbers) {
//    let minValue = Math.min(...arrNumbers)
//     console.log(minValue)
// }
// smallNumber([8, 67, 34, 5])

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sumOfNumbers (arrNumbers){
//     let basket = 0;
//     for (const arrElement of arrNumbers) {
//         basket= basket + arrElement
//     }
//     console.log(basket)
// }
// sumOfNumbers([4,67,3,23])

//для себе запам*ятати
//function calc2(a, b,...rest) {
//console.log(rest)
//}
//calc2(1,2,3,4,5,6)

//Замикання запам*ятати - можливысть функції зберігати посилання на зовнішні змінні.
// function outer () {
//    let x=100;
//     function inner(){
//     return x;}
//
//     return inner();
// }
//
// console.log(outer())

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let v1 = arr[index1];
//     let v2 = arr[index2];
//
//     arr[index1] = v2;
//     arr[index2] = v1;
//     return arr;
// }
//
// console.log(swap([22, 33, 77, 34], 3, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//Запам*ятати!
// function exchange(uah, currencies, exitCurrency) {
//     for (const item of currencies) {
//         if (item.currency === exitCurrency) {
//             return uah / item.value;
//         }
//     }
// }
//
//
// exchange(10000,
//     [
//         {currency: 'USD', value: 40},
//         {currency: 'EUR', value: 42}],
//     'USD')