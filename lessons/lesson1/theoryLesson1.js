// Main tips

// document.write('Hello')
// let str='Hello' //string
// str = 'World' // перезаписалась
// console.log(str)
// const num = 33//number
// let bool = true
//
// console.log(typeof (num));
let str1 = "Hi"
let str2 = "there"
console.log(str1+' '+str2) //конкатинація

let num1 = 50
let num2 = 3
console.log(num1*num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1+num2)
console.log(num1%num2) //ділення з остачою
console.log(BigInt(567389039))
console.log(typeof str1);

// >, <, >=, <=, ==, !== ( non-strict) ===(strict)
let res =(5<10)
console.log(res);
console.log(10 === '10'); //(strict eq)
console.log(10 == '10');

console.log('hello'=='hello')//counts amount of symbols
console.log('hi'=='hello')
//NaN - it's a number

console.log(parseInt('35kgk')) //remove everything that isn't number type
console.log(parseInt('35.9458t97495'))//remove numbers after dot

console.log('Tricky moments-----------------------')
console.log(!!10)//true
console.log(!!-10) //true
console.log(!!'-10')//true
console.log(!![])//true
console.log(!!{})//true

console.log(!!0)//false
console.log(!!'')//false, empty str
console.log(!!NaN)//false
console.log(!!null)//false
console.log(!!undefined)//false

let arr=[1, 2, 6]
console.log(typeof(arr))//object

let nan = NaN;
console.log(typeof nan);//number
console.log(typeof null);//object

//underfined - when we don´t have something defined
let a;
console.log(a)//underfined