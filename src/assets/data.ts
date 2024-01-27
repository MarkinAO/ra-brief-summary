import site_1 from "../assets/site_1.webp";
import site_2 from "../assets/site_2.webp";
import site_3 from "../assets/site_3.webp";
import site_4 from "../assets/site_4.webp";
import site_5 from "../assets/site_5.webp";
import site_7 from "../assets/site_7.webp";
import site_8 from "../assets/site_8.webp";
import site_9 from "../assets/site_9.webp";
import site_10 from "../assets/site_10.webp";
import site_11 from "../assets/site_11.webp";
import site_12 from "../assets/site_12.webp";
import site_13 from "../assets/site_13.webp";

const skillList = [
    {
        title: "Ключевые",
        skillList: [
            "React",
            "React Router",
            "Redux Toolkit",
            "Redux Sagas",
            "TypeScript"
        ]
    },
    {
        title: "JavaScript",
        skillList: [
            "Работа с DOM",
            "ООП",
            "Prototype",
            "REST API",
            "promises, async/await",
            "Работа с HTTP"
        ]
    },
    {
        title: "Вёрстка",
        skillList: [
            "HTML5",
            "CSS3",
            "Flexbox, Grid",
            "Адаптивная верстка",
            "SASS/SCSS"
        ]
    },
    {
        title: "Дополнительно",
        skillList: [
            "Git (GitHub, GitLab)",
            "Unit-тесты (Jest)",
            "Webpack, Lint, Husky, AppVeyor",
            "Figma, Photoshop",
            "Bootstrap 5, axios, luxon",
            "Kaiten, B24, Swagger"
        ]
    }
]

const portfolioList = [
    {
        title: "Коммерческий проект",
        img: site_13,
        description: "Работа в команде разработчиков. Разрабатывал отдельные виджеты, работа с сервером по API, bugfix. Применяется React, Redux-toolkit, TypeScript. Отдельно выделил бы работу в git на совместных проектах, в онлайншколах этого не хватает.",
        link: "https://wecarefondation.com/"
    },
    {
        title: "Учебный проект",
        img: site_12,
        description: "Применяется React, Redux-toolkit, Redux-sagas, TypeScript. Всё API сделал на saga. С redux-thunk тоже работал в других проектах, но они не красивые, потому сюда не добавлял :)",
        link: "https://github.com/MarkinAO/ra-diplom-shoe-store"
    },
    {
        title: "Коммерческий проект",
        img: site_2,
        description: "Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Figma",
        link: "https://markinao.github.io/no-noise/"
    },
    {
        title: "Коммерческий проект",
        img: site_3,
        description: "Небольшая страница. Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Figma",
        link: "https://markinao.github.io/no-noise/secure-transaction-block.html"
    }
    ,{
        title: "Коммерческий проект",
        img: site_4,
        description: "Небольшая страница. Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Figma",
        link: "https://markinao.github.io/no-noise/solutions.html"
    },
    {
        title: "Коммерческий проект",
        img: site_5,
        description: "Небольшая страница. Применяется только html и css. Резиновая верстка. Сверстано по скрину страницы из WordPress",
        link: "https://markinao.github.io/thank-you/"
    },
    {
        title: "Учебный проект",
        img: site_10,
        description: "Игра Retro Game. Разработал логику игры. Применяется JavaScript, Webpack. ",
        link: "https://markinao.github.io/js-advanced-diploma/",
        link2: "https://github.com/MarkinAO/js-advanced-diploma"
    },
    {
        title: "Учебный проект",
        img: site_11,
        description: "Игра Whack goblin. Применяется JavaScript, Webpack. ",
        link: "https://markinao.github.io/ahj-events/",
        link2: "https://github.com/MarkinAO/ahj-events/tree/main"
    },
    {
        title: "Учебный проект",
        img: site_1,
        description: "Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Adobe Photoshop",
        link: "https://markinao.github.io/final-work-2/"
    },
    {
        title: "Учебный проект",
        img: site_7,
        description: "Биржа неткоинов. Разработанный мной функционал расположен в папке public (регистрация, авторизация, работа с личным кабинетом). Применяется JavaScript, Webpack",
        link: "https://github.com/MarkinAO/bjs-diplom"
    },
    {
        title: "Учебный проект",
        img: site_9,
        description: "Игра крестики нолики. Разработал логику игры. Применяется JavaScript",
        link: "https://replit.com/@MarkinAO/Diplom-MarkinAO-ver2#logic.js"
    },
    {
        title: "Учебный проект",
        img: site_8,
        description: "Приложение для управления финансами. Разработанный мной функционал расположен в папке public (регистрация, авторизация, API для взаимодействия с Backend). Помимо выполнения основного задания добавил возможность редактирования транзакций. Применяется JavaScript, Webpack, html, css",
        link: "https://github.com/MarkinAO/bhj-diploma"
    }
]

export {skillList, portfolioList}