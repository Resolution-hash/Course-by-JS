"use strict";

// let numberOfFilms = 0;
// do{
//     numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
// }while(numberOfFilms == null || numberOfFilms.length == 0);

// const personalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     generes:[],
//     private:false
// };

// if(personalMovieDB.count < 10){
//     alert('Просмотренно довольно мало фильмов');
// }else if(personalMovieDB.count > 30){
//     alert('Вы киноман');
// }else if( personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//     alert('Вы классический зритель');
// }

// let a,
//     b;

// for(let i = 0; i < 2; i++){

//     do{
//         a = prompt("Один из последних посмотренных фильмов","");
//         console.log(a);
//         // console.log(a.length);
//         if(a !== null && a.length != 0 && a.length <= 50){
//             do{
//                 b = prompt("На сколько оцените его?","");
//             }while(b == null || b.length == 0 || b.length > 50);
//         }
//     }while(a == null || a.length == 0 || a.length > 50);

//     personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB.movies);

// function showFirstmessage(text) {
//     console.log(text);
// }

// showFirstmessage("Hello world!");

    
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




let numberOfFilms;
function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

function rememberMyFilms(){
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
}

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert('Просмотренно довольно мало фильмов');
    }else if(personalMovieDB.count > 30){
        alert('Вы киноман');
    }else if( personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert('Вы классический зритель');
    }
}

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const a = prompt(`Ваш любимый жанр под номером ${i+1}`,``);
        if(a != null && a.length != "" && a.length < 50){
            personalMovieDB.generes[i] = a;
        }else{
            console.log("error!");
            i--;
        }
    }
    console.log(personalMovieDB.generes);
}

//  start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    generes:[],
    private:false
};

// rememberMyFilms();

// detectPersonalLevel();

// writeYourGenres();

showMyDB(personalMovieDB.private);