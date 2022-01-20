"use strict";


// Функции


// function ret(){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function(){
//     console.log("Hello");
// };

// logger();

// const calc = (a, b) => a + b;

// console.log(calc(10,8));




// Методы строк




// const str = "test";
// const arr = [1,2,3];

// console.log(str.toUpperCase());
// console.log(str);

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world!";

// console.log(logg.slice(6));

// console.log(logg.substring(6,11));

// console.log(logg.substr(6,5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));




// Callback функция




// function first(){
//     setTimeout(function(){
//         console.log(1);
//     },500);
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang,callback){
//     console.log(`я учу ${lang}`);
//     callback();
// }

// function done(){
//     console.log("Я прошел этот урок!");
// }
// learnJS('JavaScript',done);




//Объекты, деструкторизация объектов №020




// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors:{
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: () => {
//         console.log(Object.keys(options).length);
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);


// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for(let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);





//Массивы и псевдоклассы

console.log('hi');

const arr = [5,4,8,20,16];
arr.sort(compareNum);
console.log(arr);

function compareNum(a,b){
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("","");
// const product = str.split(", ");
// product.sort();
// console.log(product.join("; "));


// arr.pop();
// arr.push(10);

// console.log(arr);

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }




// Передача по ссылке и по значению, Spread оператор




// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);



// function copy(mainObj){
//     let objCopy = {};
//     for(let key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const obj = {
//     a:5,
//     b:1
// };

// const copyObj = copy(obj);
// copyObj.a = 10;

// console.log(copyObj);                                                                        
// console.log(obj);


// const number = {
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// };

// const newNumbers = copy(number);

// newNumbers.a = 10;
// newNumbers.c.x = 100;

// console.log(newNumbers);
// console.log(number);

// const add = {
//     d:17,
//     e:20,
//     c:{
//         a:10
//     }
// };

// const clone = Object.assign({},add);

// clone.c.a = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a','b','c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asdfqwerzxcv';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube','vimeo','rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);


// function log(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2,5,7];

// log(...num);

// const array = ["a" , "b"];

// const newArray = [...array];

// const q = {
//     one:1,
//     two:2
// };

// const newObj = {...q};






//Основы ООП, прототипно-ориентированное наследование




// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);


// const soldier = {
//     health:400,
//     armor:100,
//     sayHello: function(){
//         console.log("hello!");
//     }
// };

// const john = Object.create(soldier);

// // const john = {
// //     health:100
// // };

// // // john.__proto__ = soldier;

// // Object.setPrototypeOf(john, soldier);

// john.sayHello();






const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    generes:[],
    private:false,
    start: () =>{
        this.count = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (this.count == '' || this.count == null || isNaN(this.count)){
        this.count = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
    },
    rememberMyFilms: ()=>{
        for(let i = 0; i < 2; i++){
            const a = prompt("Один из последних посмотренных фильмов",""),
                  b = prompt("На сколько оцените его?","");
             if(a != null &&  b!= null && a.length != "" && b.length != "" && a.length < 50 && b.length < 50) {
                 personalMovieDB.movies[a] = b; 
             }else{
                 console.log('error!');
                 i--;
             }
         }
    },
    detectPersonalLevel: ()=>{
        if(personalMovieDB.count < 10){
            alert('Просмотренно довольно мало фильмов');
        }else if(personalMovieDB.count > 30){
            alert('Вы киноман');
        }else if( personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            alert('Вы классический зритель');
        }
    },
    showMyDB: (hidden)=>{
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () =>{
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
            }
        },
    writeYourGenres: ()=>{
        for(let i = 1; i < 2; i++){
            let generes = prompt(`Введите любимые жарны через запятую.`,``).toLowerCase();
            if(generes === '' && generes == null){
                console.log('Вы ввели некоректные данные');
                i--;
            }else{
                personalMovieDB.generes = generes.split(', ');
            }
        }
        console.log(personalMovieDB.generes);

        personalMovieDB.generes.forEach((item,i)=>{
           console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }

};











// function start (){
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
//     }
// }

// function rememberMyFilms(){
//     for(let i = 0; i < 2; i++){
//         const a = prompt("Один из последних посмотренных фильмов",""),
//               b = prompt("На сколько оцените его?","");
//          if(a != null &&  b!= null && a.length != "" && b.length != "" && a.length < 50 && b.length < 50) {
//              personalMovieDB.movies[a] = b; 
//          }else{
//              console.log('error!');
//              i--;
//          }
//      }
// }

// function detectPersonalLevel(){
//     if(personalMovieDB.count < 10){
//         alert('Просмотренно довольно мало фильмов');
//     }else if(personalMovieDB.count > 30){
//         alert('Вы киноман');
//     }else if( personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//         alert('Вы классический зритель');
//     }
// }

// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres(){
//     for(let i = 0; i < 3; i++){
//         const a = prompt(`Ваш любимый жанр под номером ${i+1}`,``);
//         if(a != null && a.length != "" && a.length < 50){
//             personalMovieDB.generes[i] = a;
//         }else{
//             console.log("error!");
//             i--;
//         }
//     }
//     console.log(personalMovieDB.generes);
// }

//  start();



// rememberMyFilms();

// detectPersonalLevel();

// writeYourGenres();

// showMyDB(personalMovieDB.private);

