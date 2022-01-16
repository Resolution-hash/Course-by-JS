"use strict";

let numberOfFilms = 0;
do{
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
}while(numberOfFilms == null || numberOfFilms.length == 0);

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    generes:[],
    private:false
};

if(personalMovieDB.count < 10){
    alert('Просмотренно довольно мало фильмов');
}else if(personalMovieDB.count > 30){
    alert('Вы киноман');
}else if( personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert('Вы классический зритель');
}

let a,
    b;

for(let i = 0; i < 2; i++){

    do{
        a = prompt("Один из последних посмотренных фильмов","");
        console.log(a);
        // console.log(a.length);
        if(a !== null && a.length != 0 && a.length <= 50){
            do{
                b = prompt("На сколько оцените его?","");
            }while(b == null || b.length == 0 || b.length > 50);
        }
    }while(a == null || a.length == 0 || a.length > 50);

    personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB.movies);


    



