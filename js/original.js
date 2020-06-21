/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// loop for
/*for (let i = 0; i < 2; i++) {
    let lastViewMovie = prompt("Один из последних просмотренных фильмов?", ""),
        assessment = prompt("На сколько оцените его?", "");

    if (lastViewMovie != null && assessment != null && lastViewMovie != "" && assessment != "" && lastViewMovie.length < 50) {
        personalMovieDB.movies[lastViewMovie] = assessment;

    } else {
        console.log("error");
        i--;
    }
}*/

//loop while
 let i = 0;
 while(i < 2){
     let lastViewMovie = prompt("Один из последних просмотренных фильмов?", ""),
         assessment = prompt("На сколько оцените его?", "");

     if (lastViewMovie != null && assessment != null && lastViewMovie != "" && assessment != "" && lastViewMovie.length < 50) {
         personalMovieDB.movies[lastViewMovie] = assessment;

     } else {
         console.log("error");
         i--;
     }
    i++;
 }

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);