## Установка

Для сборки необходимо установить [nodejs](https://nodejs.org/en/download/) (не ниже stable версии, выбирайте вариант в зависимости от вашей системы)

Далее установить пакеты для проекта

```
npm install
```

## Запуск для разработки

```
npm run start
```

## Запуск для продакшена

```
npm run build
```

## Краткое описание сути решения задания (1) и обоснование выбора используемых технологий(2).

1. Разработать веб-страницу с часами для двух часовых поясов по ТЗ:

-   создать менеджер состояний с изначальным списком городов
-   создать компоненту выбора часового пояса (src/components/select/select.jsx).
-   создать компоненту часов + настройка (библиотека react-clock)
-   создать контейнер - компоненту для вышеописаных компнентов (src/components/analogClock/analogClock.jsx)
-

2. Create-react-app, redux, react-clock, momment

-   create-react-app - быстрая развертка проекта на react (использование react - требование ТЗ).
-   redux (требование ТЗ, но можно и без него)
-   react-clock - доступная, простая, библиотека с часами.
-   momment - библиотека для установка utc смещения. Хорошая практика для решения подобных задач. см. [статья1](https://habr.com/ru/post/242459/), [статья2](https://habr.com/ru/company/mailru/blog/438286/)
