/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener(`DOMContentLoaded`, () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };
    
    const sponsors = document.querySelector(`.promo__adv`),
        bg = document.querySelector(`.promo__bg`),
        genres = bg.querySelector(`.promo__genre`),
        listMovie = document.querySelector(`.promo__interactive-list`),
        form = document.querySelector(`form.add`),
        addInput = form.querySelector(`.adding__input`),
        checkbox = form.querySelector(`input[type = "checkbox"]`),
        buttonForm = form.querySelector(`button`);

    form.addEventListener(`submit`, (e) => {
        e.preventDefault();

        let newFilms = addInput.value;
        let checkedY = checkbox.checked;

        
        movieSort(movieDB.movies);
        createMovieList(movieDB.movies, listMovie);
        checkedFilms(newFilms, checkedY);
    });

    const removeElement = function(){
        sponsors.remove();
        genres.textContent = `Драма`;
        bg.style.cssText = `background : url("/img/bg.jpg") center center/cover no-repeat; `;
    };
    

    const movieSort = function(arr){
        arr.sort();
    };
    
    const createMovieList = function(films, parent){
        parent.innerHTML = ``;
        movieSort(films);
        films.forEach((item, i) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${i+1}.${item}
            <div class="delete"></div>
        </li>`;
        });
        
        document.querySelectorAll(`.delete`).forEach((item, i) => {
            item.addEventListener(`click`, () =>{
                item.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(films, parent);
                
            });
        });

        
    };

    const checkedFilms = function(films, loveFilm){
        if(films.length < 21 && films){
            movieDB.movies.push(films);
        } else if (films.length > 21) {
            films = `${films.split(0, 22)}...`;
            movieDB.movies.push(films);
        }
        

        if(loveFilm == true){
            console.log(`Добавляем любимый фильм`);
        }
    };

    



    removeElement();
    movieSort(movieDB.movies);
    createMovieList(movieDB.movies, listMovie);

   
});
