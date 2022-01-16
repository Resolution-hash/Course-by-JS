"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?","");
console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    generes:[],
    private:false
};

console.log(personalMovieDB);

const a = prompt("Один из последних посмотренных фильмов",""),
      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних посмотренных фильмов",""),
      d = prompt("На сколько оцените его?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);