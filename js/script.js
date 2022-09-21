window.addEventListener('DOMContentLoaded', function () { //запускаем скрипты после загрузки структуры HTML
    'use strict'; // используем строгий режим

// Задаем переменные
    let tabHeader = document.querySelector('.info-header'),
        tabs = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');


//Пишем функцию скрывающую контент вкладок
    function hide(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }

    hide(1);


//Пишем функцию показывающую контент вкладок


    function showTab(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


// Делегируем событие и привязываем вкладку к определенному контенту


    tabHeader.addEventListener('click', function(e){
        if(e.target && e.target.classList.contains('info-header-tab')){
           for(let i = 0; i < tabs.length; i++){
            if(e.target == tabs[i]) {
                hide(0);
                showTab(i);
                break;
            }
           }

        }





    });
















});