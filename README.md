### Screen prototypes
- [figma](https://www.figma.com/file/Z6aAEG7hVESc7uLjFRa90O/Yandex-Chat?type=design&node-id=0-1&t=Q5H6V3wwkRWlA1Uo-0 )
### Demo
- [app.netlify](https://chipper-douhua-6feafd.netlify.app)

### Scripts
- `npm run build` - сборка проекта;
- `npm run dev` - запуск локально для разработки;
- `npm run start` - запуск сервера node.js;
- `npm run type-check` - проверка ошибок типизации (typescript);
- `npm run eslint-fix` - исправление ошибок eslint;
- `npm run stylelint-fix` - исправление ошибок stylelint;
- `npm run test` - запуск тестов;


### Description

- В проекте используется [typescript](https://www.typescriptlang.org/), конфигурации и описание правил можно увидеть в корневом файле ```tsconfig.json```
- Для единого стиля написания кода используются такие технологии как [eslint](https://eslint.org/) и [stylelint](https://stylelint.io/), c конфигурации можно ознакомиться в корневыйх файлах ```.eslintrc.cjs``` и ```.stylelintrc.json``` 
- В проекте также используются бибилиотеки `Mocha` и `Chai` для `Unit Test`. Запустить тесты можно командой `npm run test`