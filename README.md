# Установка проекта и библиотека BOT
 

**git clone https://github.com/butysMikhael7/bot.git**


# Экспорт модуля:
**Node JS**
```js
const { BOT } = require('./setting_bot/setting_comand.js');
let bot = new BOT("Bоt");
``` 

# Методы:
 
**check()**
```js
bot.check("string"); // STRING 
```

**status()**
***Статус бота:***
```js
console.log(bot.status()); 
```

**creatMain()**
***Создает главное меню клавиатуры:***
```js
bot.creatMain("One", "Two", "Three", "Four");
```

**creatMessageTwoButton()**
***Создает клавиатуру к сообщению (2 кнопки)***
```js
bot.creatMessageTwoButton("Text", "Text");
```

**creatMessageButton()**
***Создает клавиатуру к сообщению (1 кнопка)***

***color: _Keyboard.PRIMARY_COLOR_, _Keyboard.NEGATIVE.COLOR_, _Keyboard.POSITIVE_COLOR_***
```js
bot.createMessageButton("Text", color);
```
