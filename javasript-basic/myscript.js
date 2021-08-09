// let var const 
/*variable */
/* let myName = "Mehul";
var iLike = "pizza";
const PI = 3.11; *///const can't be redifine;

/* data types */

/* let string = "This is a normal string";//string
let number = 43;//number
let bool = false;//bool
let array = [1,2,3,4,5,6,7,8];// array
let _undefine = undefined;// udefined
let _null = null;//null value
let _NaN = NaN; // not a mumber
let object = {"name": "habib"};//object
// object can access object.keyname same as object[keyname]. */

/* function */
/* 
function myAwesomeFunction(parametter, defaul = 0){
    // all of code
    console.log(parametter + " this is function");
    console.log(defaul)
}
myAwesomeFunction("hello ");

let myVariable = 20;
let decler;
if(myVariable ===20){
    decler = "Rakib"
    console.log("true");
}
console.log(decler); */

//v8 provides
//alert
//prompt
// confirm
// confirm("are your sure");
/* object */
/* let obj = {
    keyname : "value1",
    keyname1 : "value2"
}
console.log(obj.keyname);
console.log(obj["keyname1"])
obj.keyname1 = undefined;
console.log(obj.keyname1);
delete obj.keyname;
console.log(obj.keyname);

const person = {
    name : "Habib"
}

person.name = "somthing else";

console.log(person.name); */

/* array */
/* 
let arr = ['hello','world'];
arr['mykey'] = ["!!!"];
console.log(arr)
 */
/* switch case */

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

/* let myAge = 20;
switch (myAge) {
    case 20:
        console.log("your are 20");
        break;
    case 21:
        console.log("your are 21");
    default:
        console.log("your are neither 20 or 21");
        break;
} */

//or and Not

/* let myMagicVariable = 2 || 3;//or return first trueth vlaue;
let myMagicVariable1 = null ||"sfasfh"|| 3 ;//or return first trueth vlaue;
console.log(myMagicVariable);
console.log(myMagicVariable1);

let myMagicaVariable2 = "kjsdfh" && undefined; //and return falshy value
console.log(myMagicaVariable2)


let myAge = 10;
console.log(!!myAge); */

/* & | ~ ^ */

let num1 = 6;   // ---> 110
let num2 = 3;   // ---> 011
                // ---> ----
                // ---> 010 = 2

console.log(num1 & num2);
                // ---> 110
                // ---> 011
                // ---> ----
                // ---> 111 = 7
console.log(num1 | num2);
                // ---> 110
                // ---> 011
                // ---> ----
                // ---> 101 = 5
console.log(num1 ^ num2);
                // ---> 000000000000000110 ---> 111111111111111001
                // ---> 000000000000000011 ---> 111111111111111100
console.log(~num1);
console.log(~num2);
console.log(~(~num1));
console.log(~(~num2));


/* do while loop */

let i = 100;
while (i < 10) {
    console.log('Not Run');
    i++;
}
do{
    console.log('Run 1 time');
    i++;
}while( i < 10);

for (let i = 0; i < 10; i++) {
    console.log(i);
    if(i == 5){
        break;
    }
    
}


/* map */

let array =[1,2,3,4,5,6,7,8];
let array2 = array.map((num) => num*5);
console.log(array2);

/* filter */

let newArray = array.filter(num => {
  if(num > 2) return true;
  return false;  
})
console.log(newArray);


array.forEach(ele =>console.log(ele));


/* reduce */

let arr =[1,2,3,4,5,6,7,8,9,10];
const res = arr.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
});
// accumulator = 1 | currentValue = 2;
// accumulator = 3 | currentValue = 3;

console.log(res);


/* indexOf */

let myFavFood = ["Pizza", "burgers", "pasta"];

console.log(myFavFood.indexOf("Pizzas") > -1)

const obj = [
    {
        name: 'abc',
        age: 14
    },
    {
        name: 'def',
        age: 17
    }
]
console.log(obj)

const student = obj.find(s => {
    return s.age === 14;
});
console.log(student)

/* setInteval and setTimeOut */

// console.log('Program start');
// setTimeout(() =>{
//     console.log("Hi, I am late");
// }, 3000);
// console.log("program ends");
// let set = 0;
// let id = setInterval(() => {
//     console.log(set++)
//     if(set === 5){
//         clearInterval(id);
//     }
// }, 1000);
/* event */

const ele = document.getElementById('name');
ele.onclick = function() {
    console.log('clicked')
}

/* exception handling try catch */


let x = 100;
let y = 0;
try {
    // if(y ==0){
    //     throw "y can't be zero"
    // }
    document.getElementById('abbc').hidden;
    console.log(x/y);
} catch (error) {
    console.log(error)
}
console.log("try and catch")