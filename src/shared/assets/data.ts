import site_1 from "./site_1.webp";
import site_2 from "./site_2.webp";
import site_3 from "./site_3.webp";
import site_4 from "./site_4.webp";
import site_5 from "./site_5.webp";
import site_7 from "./site_7.webp";
import site_8 from "./site_8.webp";
import site_9 from "./site_9.webp";
import site_10 from "./site_10.webp";
import site_11 from "./site_11.webp";
import site_12 from "./site_12.webp";
import site_13 from "./site_13.webp";
import site_14 from "./site_14.webp";
import site_15 from "./site_15.webp";
import site_16 from "./site_16.webp";
import site_17 from "./site_17.webp";

const skillList = [
  {
    title: "Ключевые",
    skillList: [
      "Next",
      "React (Router)",
      "Redux (Toolkit, Saga, RTK Query)",
      "Zustand",
      "TypeScript",
      "SASS/SCSS",
    ],
  },
  {
    title: "Базовые",
    skillList: [
      "HTML5",
      "CSS3",
      "Flexbox, Grid",
      "Адаптивная верстка",
      "REST API",
      "Git (GitHub, GitLab)",
    ],
  },
  {
    title: "Общие",
    skillList: [
      "Git flow",
      "FSD-архитектура",
      "Webpack, Lint",
      "Figma, Photoshop",
      "Bootstrap 5",
      "Kaiten, B24, Swagger",
    ],
  },
];

const softSkillList = [
  {
    title: "Руковожу проектами ПИР, а потому знаю эту боль когда новичок:",
    skillList: [
      "Дергает с вопросами ответы на которые есть в первых ссылках в гугле",
      "Вопросы к смежным отделам пишет тебе, вместо того чтобы связаться напрямую",
      "Невнимательно или не полностью читает задание и приносит соответствующий результат",
      "Сообщает в последний момент о том, что не успевает сделать задачу в срок",
      "Не может принять простейшее решение из-за чего задача зависает",
      "Не учитывает что его действия/бездействия влияют на работу других",
    ],
  },
  {
    title: "Идеальный сотрудник это:",
    skillList: [
      "Которому можно отдать задачу и забыть про неё",
      "Если не хватает информации, сформирует четкий список, расставит приоритеты",
      "В сложных ситуациях сам инициирует совещания с заказчиком, подрядчиком или коллегами",
      "Приходит с вариантами решения, а не вопросами",
      "Эмоционально стабилен",
      "Ну и чувство юмора не помешает)",
    ],
  },
];

const portfolioList = [
  {
    title: "Коммерческий проект",
    img: site_15,
    description:
      "Проект Десница. Организация: благотворительный проект GoD. Сейчас в процессе разработки. Здесь я выполняю роли frontend-разработчика и frontend-teamlead. Работа с сервером по REST API, bugfix. Применяется Next, React, Redux-toolkit, TypeScript.",
    link: "https://www.figma.com/file/mgU4lZ4k4FnOFeLmuyTPfn/%D0%94%D0%B5%D1%81%D0%BD%D0%B8%D1%86%D0%B0?type=design&node-id=0-1&mode=design&t=AjV8DkwRauTp2V0S-0",
  },
  {
    title: "Коммерческий проект",
    img: site_13,
    description:
      "Проект We Care. Организация: благотворительный проект GoD. Работа в команде разработчиков. Разрабатывал отдельные виджеты, работа с сервером по API, bugfix. Применяется React, Redux-toolkit, TypeScript. Отдельно выделил бы работу в git на совместных проектах, в онлайншколах этого не хватает.",
    link: "https://wecarefondation.com/",
  },
  {
    title: "Проект - тестовое задание",
    img: site_17,
    description:
      "Проект Игра в кости. Технологии: React, TypeScript, Zustand, Sass. ",
    link: "https://dice-game-lztg.onrender.com/",
    link2: "https://github.com/MarkinAO/dice-game",
  },
  {
    title: "Проект - тестовое задание",
    img: site_16,
    description:
      "Проект Каталог игр. Технологии: React, React-router, TypeScript, Redux-toolkit, Sass. Реализован каталог игр с возможностью поиска (только на английском) и фильтрации по тегам. Данные берутся с API сервера RAWG. ",
    link: "https://games-catalog.onrender.com/",
    link2: "https://github.com/MarkinAO/games-catalog",
  },
  {
    title: "Учебный проект",
    img: site_12,
    description:
      "Применяется React, Redux-toolkit, Redux-sagas, TypeScript. Всё API сделал на saga. С redux-thunk тоже работал в других проектах, но они не красивые, потому сюда не добавлял :)",
    link: "https://github.com/MarkinAO/ra-diplom-shoe-store",
  },
  {
    title: "Pet-проект",
    img: site_14,
    description:
      "Сайт-резюме. Применяется React, TypeScript, Bootstrap. Архитектура FSD. ",
    link: "https://github.com/MarkinAO/ra-brief-summary",
  },
  {
    title: "Коммерческий проект",
    img: site_2,
    description:
      "Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Figma",
    link: "https://markinao.github.io/no-noise/",
  },
  {
    title: "Коммерческий проект",
    img: site_3,
    description:
      "Небольшая страница. Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Figma",
    link: "https://markinao.github.io/no-noise/secure-transaction-block.html",
  },
  {
    title: "Коммерческий проект",
    img: site_4,
    description:
      "Небольшая страница. Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Figma",
    link: "https://markinao.github.io/no-noise/solutions.html",
  },
  {
    title: "Коммерческий проект",
    img: site_5,
    description:
      "Небольшая страница. Применяется только html и css. Резиновая верстка. Сверстано по скрину страницы из WordPress",
    link: "https://markinao.github.io/thank-you/",
  },
  {
    title: "Учебный проект",
    img: site_10,
    description:
      "Игра Retro Game. Разработал логику игры. Применяется JavaScript, Webpack. ",
    link: "https://markinao.github.io/js-advanced-diploma/",
    link2: "https://github.com/MarkinAO/js-advanced-diploma",
  },
  {
    title: "Учебный проект",
    img: site_11,
    description: "Игра Whack goblin. Применяется JavaScript, Webpack. ",
    link: "https://markinao.github.io/ahj-events/",
    link2: "https://github.com/MarkinAO/ahj-events/tree/main",
  },
  {
    title: "Учебный проект",
    img: site_1,
    description:
      "Применяется только html и css. Адаптивная, кроссбраузерная верстка. Сверстано по макету из Adobe Photoshop",
    link: "https://markinao.github.io/final-work-2/",
  },
  {
    title: "Учебный проект",
    img: site_7,
    description:
      "Биржа неткоинов. Разработанный мной функционал расположен в папке public (регистрация, авторизация, работа с личным кабинетом). Применяется JavaScript, Webpack",
    link: "https://github.com/MarkinAO/bjs-diplom",
  },
  {
    title: "Учебный проект",
    img: site_9,
    description:
      "Игра крестики нолики. Разработал логику игры. Применяется JavaScript",
    link: "https://replit.com/@MarkinAO/Diplom-MarkinAO-ver2#logic.js",
  },
  {
    title: "Учебный проект",
    img: site_8,
    description:
      "Приложение для управления финансами. Разработанный мной функционал расположен в папке public (регистрация, авторизация, API для взаимодействия с Backend). Помимо выполнения основного задания добавил возможность редактирования транзакций. Применяется JavaScript, Webpack, html, css",
    link: "https://github.com/MarkinAO/bhj-diploma",
  },
];

export { skillList, softSkillList, portfolioList };
