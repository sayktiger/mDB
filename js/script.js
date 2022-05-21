/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const sponsors = document.querySelector(`.promo__adv`),
    bg = document.querySelector(`.promo__bg`),
    genres = bg.querySelector(`.promo__genre`),
    listMovie = document.querySelector(`.promo__interactive-list`);

sponsors.remove();
genres.textContent = `Драма`;
bg.style.cssText = `background : url("/img/bg.jpg") center center/cover no-repeat; `;

listMovie.innerHTML = ``;
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    listMovie.innerHTML += `
    <li class="promo__interactive-item">${i+1}.${item}
        <div class="delete"></div>
    </li>`;
    
});

console.log(listMovie);